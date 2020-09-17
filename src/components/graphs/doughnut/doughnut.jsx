/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-doughnutlabel';

class Doughnut extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { data, colors } = this.props;
    const total = data.map((d) => d.value).reduce((accum, value) => accum + value);

    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: data.map((d) => d.label),
        datasets: [{
          data: data.map((d) => d.value),
          backgroundColor: colors,
        }],
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
        },
        animation: {
          animateScale: true,
        },
        cutoutPercentage: 70,
        plugins: {
          // labels for chartjs-plugin-doughnutlabel
          doughnutlabel: {
            labels: [
              {
                text: total,
                font: {
                  size: '30',
                  weight: '900',
                },
                color: 'var(--dark)',
              },
            ],
          },
          // labels for chartjs-plugin-labels
          labels: {
            render: 'value',
            fontColor: ['white', 'white', 'white'],
            precision: 2,
          },
        },
      },
    });
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map((d) => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
    this.myChart.update();
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
export default Doughnut;
