// import { render } from 'react-dom'
import React from 'react';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
class Graph extends React.Component{

  render() {
    const options = {
      title: {
        text: '--- PROFIT/LOSS Graph ---'
    },
      chart: {
        type: 'column'
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Profit/Loss Graph'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'profit/loss: <b>{point.y:.1f}</b>'
      },
      series: [{
        name: '',
        data: [
          ['GO/BTC', 20.8],
          ['LTC/BTC', -14.9],
          ['MATIC/BTC', -13.7],
          ['BCH/BTC', 13.1],
          ['DLT/BTC', 12.7],
          ['VET/BTC', -12.4],
          ['DOT/BTC', 12.2],
          ['LTC/BUSD', this.props.data],
          ['BTG/CUSD', 12.0],
          ['GO/ETH', 11.7],

        ]
      }]
    }
    return (
      <div>
      <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />      </div>
    );
  }
}
 export default Graph;
