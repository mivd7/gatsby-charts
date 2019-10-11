import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {availableCharts} from '../utils/chartOptions';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: 275,
    backgroundColor: 'white',
    disabled: 'opacity: 0'
  },
  disabledBtn: 0
});

const Chart = ({data}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [chart, setChart] = React.useState(availableCharts[0])

  const handleNext = () => {
    setChart(availableCharts[activeStep + 1])
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setChart(availableCharts[activeStep - 1])
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const countries = data.map(data => data.node.Country);

  const cpcOptions = {
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

  const roiOptions = {
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

  const clicksOptions = {
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

  return (
    <div>
      {!data && <p>loading data</p>}
      {data && (<>
        {chart === 'cpc' && <HighchartsReact highcharts={Highcharts} options={cpcOptions} />}
        {chart === 'roi' && <HighchartsReact highcharts={Highcharts} options={roiOptions} />}
        {chart === 'clicks' && <HighchartsReact highcharts={Highcharts} options={clicksOptions} />}

        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 2} >
              {availableCharts[activeStep + 1]} Charts
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              {availableCharts[activeStep - 1]} Charts
            </Button>
          }
        />
        </>
      )}
    </div>
  )
}

export default Chart
