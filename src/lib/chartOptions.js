import {calculateRoi} from './formulas';

export const availableCharts = ["roi", "clicks"]
export const chartTypes = ["line","pie","column"]

export const clicksOptions = (data) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "ROI / Revenue / Conversions ",
    },
    xAxis: {
      categories: data.map(data => data.node.Country),
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Impressions",
        data: data.map(data => Number(data.node.Impressions)),
      },
      {
        name: "Clicks",
        data: data.map(data => Number(data.node.Clicks)),
      },
    ],
  }
  return options
}

export const setRoiOptions = (data) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "ROI / Revenue / Conversions ",
    },
    xAxis: {
      categories: data.map(data => data.node.Country),
    },
    yAxis: [{
        title: {
          text: "$ USD",
          },
      },{
        title: {
          text: " % "
        },
        opposite: true
      }],
    series: [
      {
        name: "Average CPC",
        data: data.map(data => Number(data.node.Average_CPC)),
        yAxis: 0,
        tooltip: {
          valuePrefix: '$ '
        }
      },
      {
        name: "Top EPC",
        data: data.map(data => Number(data.node.EPC)),
        yAxis: 0,
        tooltip: {
          valuePrefix: '$ '
        }
      },
      {
        name: "ROI",
        data: data.map(data => Number(calculateRoi(data.node.EPC, data.node.Average_CPC))),
        yAxis: 1,
        tooltip: {
          valueSuffix: ' %'
        }
      },
    ],
  }
  return options
}

export const cpcOptions = (data) => {
  console.log(data.map(data => data.node.Country))
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "CPC / Cost / EPC ",
    },
    xAxis: {
      categories: data.map(data => data.node.Country),
    },
    yAxis: {
      title: {
        text: "USD $",
      },
    },
    series: [
      {
        name: "Average CPC",
        data: data.map(data => Number(data.node.Average_CPC)),
      },
      {
        name: "Cost",
        data: data.map(data => Number(data.node.Cost)),
      },
      {
        name: "Top EPC",
        data: data.map(data => Number(data.node.EPC)),
      },
    ],
  }
  return options
}

export const customOptions = (input) => {
  const propertyData = input.pickedProperties.map(property => {
    return { 
      name: property, 
      data: input.selectedCountry.node[`${property}`]
    } 
  })
  console.log(propertyData)
  const options = {
    chart: {
      type: input.chartType,
    },
    title: {
      text: 'Your chart',
    },
    xAxis: {
      categories: ["Hungary"]
    },
    yAxis: {
      title: {
        text: "USD $",
      },
    },
    series: propertyData
    // [
      // {
      //   name: "Average CPC",
      //   data: data.map(data => Number(data.node.Average_CPC)),
      // },
      // {
      //   name: "Cost",
      //   data: data.map(data => Number(data.node.Cost)),
      // },
      // {
      //   name: "Top EPC",
      //   data: data.map(data => Number(data.node.EPC)),
      // },
    // ],
  }
  console.log(options)
  return options
}

