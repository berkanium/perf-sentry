
# perf-sentry

A npm package that scans and analyzes the performance of all files in the project and provides tips on how to optimize them for better performance. It generates a detailed report with graphical representation of the performance of each file.
 
# Installation

You can install the package using npm:

- `npm i perf-sentry`  
- `npm install perf-sentry`  

## Usage
 
To use `perf-sentry`, navigate to the root directory of your project and run the following command:

`npx perf-sentry`

This will scan all files in your project and generate a performance report in your terminal. You can also generate an HTML report by passing the -o or --output flag followed by a file name. For example:

`npx perf-sentry -o index.html`
 
This will generate an HTML report in the current directory with the name `report.html`.

## Example

Here is an example of how to use `perf-sentry`:

`const perfAnalyzer = require('perf-sentry');`
`perfAnalyzer.analyzePerformance();`

## Report

 The generated report includes the following sections:

## Slow Files

This section lists all the files that have slow performance. It includes the name of the file and the duration it takes to load.

## Average Durations

This section lists the average duration of all the files in the project. It includes the name of the file and the average duration.

## Average Duration

This section displays the average duration of all the files in the project.

## Security

This package is developed with security in mind. It does not collect or transmit any user data.

## License

This package is licensed under the MIT License. See the LICENSE file for more information.