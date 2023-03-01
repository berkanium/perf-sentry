const { analyzePerformance } = require('./performance-analysis');

function renderReport() {
  const { slowFiles, averageDurations, averageDuration } = analyzePerformance();
  
  const slowFilesList = document.getElementById('slow-files');
  slowFiles.forEach((file) => {
    const listItem = document.createElement('li');
    listItem.textContent = file;
    slowFilesList.appendChild(listItem);
  });
  
  const averageDurationsList = document.getElementById('average-durations');
  averageDurations.forEach(({ file, duration }) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${file}: ${duration}ms`;
    averageDurationsList.appendChild(listItem);
  });
  
  const averageDurationParagraph = document.getElementById('average-duration');
  averageDurationParagraph.textContent = `${averageDuration}ms`;
}

renderReport();
