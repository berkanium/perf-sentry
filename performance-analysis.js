const { filePerformanceData } = require('./performance');

// A function to analyze performance data and return suggestions for optimization
function analyzePerformance() {
  const slowFiles = [];
  const averageDurations = [];
  let totalDuration = 0;

  filePerformanceData.forEach((data, file) => {
    if (data.averageDuration > 50) {
      slowFiles.push(file);
    }
    averageDurations.push({ file, duration: data.averageDuration });
    totalDuration += data.totalDuration;
  });

  const averageDuration = totalDuration / filePerformanceData.size;

  return {
    slowFiles,
    averageDurations,
    averageDuration
  };
}

module.exports = { analyzePerformance };
