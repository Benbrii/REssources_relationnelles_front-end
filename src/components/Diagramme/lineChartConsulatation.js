import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
  datasets: [
    {
      label: 'Consultation',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [90, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const LineChart=(props)=> 
{ 
  data.datasets[0].data = props.dataConst
  data.datasets[0].label = props.title

  data.datasets[0].borderColor = props.color


  return (
    <div className="line">
        <Line data={data} />
      </div>
  )
} 
  
export default LineChart;