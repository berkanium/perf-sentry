const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { analyzePerformance } = require('./performance-analysis');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  const { slowFiles, averageDurations, averageDuration } = analyzePerformance();
  res.json({ slowFiles, averageDurations, averageDuration });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
