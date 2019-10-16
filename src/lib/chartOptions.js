export const availableCharts = ["cpc", "roi", "clicks"]
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

export const roiOptions = (data) => {
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
        name: "ROI",
        data: data.map(data => Number(data.node.ROI)),
      },
      {
        name: "Revenue",
        data: data.map(data => Number(data.node.Revenue)),
      },
      {
        name: "Conversions",
        data: data.map(data => Number(data.node.Conversions)),
      },
    ],
  }
  return options
}

export const cpcOptions = (data) => {
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
  const allProperties = Object.getOwnPropertyNames(input.selectedCountry)
  console.log(allProperties.find(p => p === 'CPC'))
  const options = {
    chart: {
      type: input.chartType,
    },
    title: {
      text: `Your chart for ${input.selectedCountry}`,
    },
    xAxis: {
      categories: input.selectedCountry,
    },
    yAxis: {
      title: {
        text: "USD $",
      },
    },
    series: 'yes'
    // input.pickedProperties.map(property => {
    //     return{ 
    //       name: property, 
    //       data: input.selectedCountry[`${allProperties.find(p => p === property)}`]} 
    //   })
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
  return options
}

