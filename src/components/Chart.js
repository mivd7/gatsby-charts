import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'CPL CPC whatever... whatever...'
    },
    xAxis: {
        categories: ['Czech Republic', 'Hungary', 'Slovenia']
    },
    yAxis: {
        title: {
            text: 'Cost'
        }
    },
    series: [{
        name: 'Average EPC',
        data: [0.026, 0.051 , 0.036]
    }, {
        name: 'Top EPC',
        data: [0.1, 0.07, 0.03]
    }, {
        name: 'Market CPC',
        data: [0.03,0.04,0.03]
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

