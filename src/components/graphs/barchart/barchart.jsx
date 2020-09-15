/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Chart from 'chart.js';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'bar',
      data: {
        labels: this.props.data.map((d) => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map((d) => d.value),
          barThickness: 40,
          maxBarThickness: 60,
          backgroundColor: this.props.color,
        }],
      },
      options: {
        plugins: {
          labels: {
            showZero: false,
            render: 'value',
          },
        },
      },
    });
  }

  render() {
    return (
	<canvas ref={this.chartRef} />
    );
  }
}

export default BarChart;
