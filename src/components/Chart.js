import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 5, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
}

const Chart = () => {
 return(
    <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options} />
    </div>
  )
}

export default Chart;

