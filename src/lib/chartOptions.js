export const availableCharts = ["cpc", "roi", "clicks"]

export const clicksOptions = (data, countries) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "ROI / Revenue / Conversions ",
    },
    xAxis: {
      categories: countries,
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

export const roiOptions = (data, countries) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "ROI / Revenue / Conversions ",
    },
    xAxis: {
      categories: countries,
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

export const cpcOptions = (data, countries) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "CPC / Cost / EPC ",
    },
    xAxis: {
      categories: countries,
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
