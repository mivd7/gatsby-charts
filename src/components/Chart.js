import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Chart (props) {
    const countries = props.data.map(data => data.node.Country)
    const averageCpc = props.data.map(data => Number(data.node.Average_CPC))
    const cost = props.data.map(data => Number(data.node.Cost))
    const epc = props.data.map(data => Number(data.node.EPC))
    console.log(averageCpc, cost, epc)
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'CPL Stats'
        },
        xAxis: {
            categories: countries
        },
        yAxis: {
            title: {
                text: 'USD $'
            }
        },
        series: [{
            name: 'Average CPC',
            data: averageCpc
        }, {
            name: 'Cost',
            data: cost
        }, {
            name: 'Top EPC',
            data: epc
        }]
    }
    return(
        <div>
          {!props.data && <div>loading data</div>}
          {props.data &&
            <HighchartsReact
                highcharts={Highcharts}
                options={options} />
          }
        </div>
  )
}