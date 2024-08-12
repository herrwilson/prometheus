const express = require('express');
const cors = require('cors');
const renderRoutes = require('./routes/renderRoutes');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Route for root path
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.use('/api', renderRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

