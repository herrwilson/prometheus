const {ClickHouse} = require('clickhouse');

const clickhouse = new ClickHouse({
    url: 'http://localhost',
    port: 8123,
    debug: false,
    basicAuth: null,
    isUseGzip: false,
    format: "json",
});

const BATCH_SIZE = 1000;

const generatePoints = (numPoints) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            z: Math.random() * 1000
        });
    }
    return points;
};

const insertPointsBatch = async (pointsBatch) => {
    const query = 'INSERT INTO my_database.points (x, y, z) VALUES';
    const values = pointsBatch.map(p => `(${p.x}, ${p.y}, ${p.z})`).join(',');

    try {
        await clickhouse.query(`${query} ${values}`).toPromise();
        console.log(`Inserted ${pointsBatch.length} points`);
    } catch (error) {
        console.error('Error inserting points:', error.response ? error.response.data : error.message);
    }
};

const insertPoints = async (points) => {
    for (let i = 0; i < points.length; i += BATCH_SIZE) {
        const batch = points.slice(i, i + BATCH_SIZE);
        await insertPointsBatch(batch);
    }
};

const main = async () => {
    const numPoints = process.argv[2] ? parseInt(process.argv[2], 10) : 1000;
    const points = generatePoints(numPoints);
    await insertPoints(points);
};

main().catch(console.error);
