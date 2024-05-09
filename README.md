# Interactive Data Visualization

This npm package provides a simple yet powerful tool for creating interactive data visualizations in JavaScript using D3.js.

## Installation

You can install the package via npm:

```bash
npm install interactive-data-visualization


// Import the Visualization class
const Visualization = require('interactive-data-visualization');

// Sample data
const data = [
    { x: 50, y: 50, radius: 10, color: 'blue', label: 'Point 1' },
    { x: 100, y: 100, radius: 15, color: 'red', label: 'Point 2' },
    { x: 150, y: 150, radius: 20, color: 'green', label: 'Point 3' }
];

// Visualization options
const options = {
    container: '#visualization-container',
    width: 300,
    height: 300
};

// Instantiate the Visualization class
const viz = new Visualization(data, options);


API
new Visualization(data, options)
Creates a new instance of the Visualization class.

data: An array of objects representing data points. Each object should have x, y, radius, color, and label properties.
options: An object specifying configuration options for the visualization. It should contain container, width, and height properties.

License
This project is licensed under the MIT License - see the LICENSE file for details.