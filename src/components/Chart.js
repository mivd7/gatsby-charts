import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {MobileStepper, Button} from '@material-ui/core';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import {availableCharts, setRoiOptions} from '../lib/chartOptions';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: 275,
    backgroundColor: 'white',
  },
  disabledBtn: 0,
  formControl: {
    minWidth: 120,
  },
});

const Chart = ({data, options}) => {
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
  
  return (
    <div>
      {!data && <p>loading data</p>}
      {data && (<>
        {chart === 'roi' && <HighchartsReact highcharts={Highcharts} options={setRoiOptions(data)} />}
        {chart === 'population' && <div>here be a population comparison chart</div>}

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