import { calculateRoi } from "./formulas"
import countries from "./countries"

export const availableCharts = ["roi", "population"]
export const chartTypes = ["line", "pie", "column"]

export const setPopulationOptions = data => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Population / ROI ",
    },
    xAxis: {
      categories: countries.map(country => `${country.emoji} ${country.name}`),
    },
    yAxis: [
      {
        title: {
          text: "Population",
        },
      },
      {
        title: {
          text: "ROI %",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Population",
        data: data.map(data => Number(data.node.Population)),
        yAxis: 0,
      },
      {
        name: "ROI",
        data: data.map(data =>
          Number(calculateRoi(data.node.EPC, data.node.Average_CPC))
        ),
        yAxis: 1,
        tooltip: {
          valueSuffix: " %",
        },
      },
    ],
  }
  return options
}

export const setRoiOptions = data => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "CPC / EPC / ROI ",
    },
    xAxis: {
      categories: countries.map(country => `${country.emoji} ${country.name}`),
    },
    yAxis: [
      {
        title: {
          text: "$ USD",
        },
      },
      {
        title: {
          text: "ROI %",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Average CPC",
        data: data.map(data => Number(data.node.Average_CPC)),
        yAxis: 0,
        tooltip: {
          valuePrefix: "$ ",
        },
      },
      {
        name: "Top EPC",
        data: data.map(data => Number(data.node.EPC)),
        yAxis: 0,
        tooltip: {
          valuePrefix: "$ ",
        },
      },
      {
        name: "ROI",
        data: data.map(data =>
          Number(calculateRoi(data.node.EPC, data.node.Average_CPC))
        ),
        yAxis: 1,
        tooltip: {
          valueSuffix: " %",
        },
      },
    ],
  }
  return options
}

export const customizedOptions = input => {
  const propertyData = input.pickedProperties.map(property => {
    return {
      name: property,
      data: input.selectedCountry.node[`${property}`],
    }
  })

  const options = {
    chart: {
      type: input.chartType,
    },
    title: {
      text: "Your chart",
    },
    xAxis: {
      categories: ["Hungary"],
    },
    yAxis: {
      title: {
        text: "USD $",
      },
    },
    series: propertyData,
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
