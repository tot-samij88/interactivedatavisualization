// interactive-data-visualization.js

// Import dependencies
const d3 = require('d3');

// Define the Visualization class
class Visualization {
    constructor(data, options) {
        this.data = data;
        this.options = options;
        this.container = document.querySelector(options.container);

        // Initialize the visualization
        this.init();
    }

    init() {
        // Set up SVG element
        const svg = d3.select(this.container)
            .append('svg')
            .attr('width', this.options.width)
            .attr('height', this.options.height);

        // Add data points as circles
        svg.selectAll('circle')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.radius)
            .style('fill', d => d.color)
            .on('mouseover', function() {
                d3.select(this).attr('r', d => d.radius * 1.5);
            })
            .on('mouseout', function() {
                d3.select(this).attr('r', d => d.radius);
            });

        // Add labels to data points
        svg.selectAll('text')
            .data(this.data)
            .enter()
            .append('text')
            .attr('x', d => d.x + 5)
            .attr('y', d => d.y)
            .text(d => d.label)
            .style('font-size', '12px')
            .style('fill', 'black');
    }
}

// Export the Visualization class
module.exports = Visualization;
