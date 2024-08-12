const { exec } = require('child_process');
const { ClickHouse } = require('clickhouse');

const clickhouse = new ClickHouse({
  url: 'http://localhost',
  port: 8123,
  debug: false,
  basicAuth: null,
  isUseGzip: false,
  format: 'json',
  raw: false,
  config: {
    session_timeout: 60,
    output_format_json_quote_64bit_integers: 0,
    enable_http_compression: 0,
  },
});

exports.generatePoints = (req, res) => {
  exec('node pointGen.js 10000', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return res.status(500).send('Error generating points');
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Points generated');
  });
};

exports.fetchPoints = async (req, res) => {
  try {
    console.log('Fetching points from ClickHouse'); // Debug log
    const rows = await clickhouse.query('SELECT * FROM my_database.points').toPromise();
    console.log('Fetched points:', rows); // Debug log
    res.json(rows);
  } catch (error) {
    console.error('Error fetching points:', error); // Debug log
    res.status(500).send('Error fetching points');
  }
};

exports.saveRender = async (req, res) => {
  const { renderName } = req.body;
  try {
    await clickhouse.query(`CREATE TABLE IF NOT EXISTS ${renderName} AS points`).toPromise();
    await clickhouse.query(`INSERT INTO ${renderName} SELECT * FROM points`).toPromise();
    res.send('Render saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving render');
  }
};

exports.discardRender = async (req, res) => {
  try {
    await clickhouse.query('TRUNCATE TABLE my_database.points').toPromise();
    res.send('Render discarded');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error discarding render');
  }
};
