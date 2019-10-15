import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {MobileStepper, Button, InputLabel, MenuItem, FormControl, Select, TextField} from '@material-ui/core';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import {availableCharts, roiOptions, clicksOptions, cpcOptions} from '../lib/chartOptions';
import {calculateRoi} from '../lib/formulas';

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

const Chart = ({data}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [chart, setChart] = React.useState(availableCharts[0])
  const [values, setValues] = React.useState({
      country: '',
      cost: 0,
  })
  const [calculatedRoi, setCalculatedRoi] = React.useState(0)


  const handleClick = () => {
    if (values.country && values.cost) {
      const countrySpecific = data.filter(data => data.node.Country === values.country)[0]
      const roi = calculateRoi(countrySpecific.node.Revenue, Number(values.cost))
      setCalculatedRoi(roi)
    }
  }

  const handleChange = React.useCallback((event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
   }, [values]);

  const handleNext = () => {
    setChart(availableCharts[activeStep + 1])
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setChart(availableCharts[activeStep - 1])
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const countries = data.map(data => data.node.Country);
  
  return (
    <div>
      {!data && <p>loading data</p>}
      {data && (<>
        {chart === 'cpc' && <HighchartsReact highcharts={Highcharts} options={cpcOptions(data, countries)} />}
        {chart === 'roi' && <>
          <HighchartsReact highcharts={Highcharts} options={roiOptions(data, countries)} />

          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="country-simple">Country</InputLabel>
              <Select
                value={values.country}
                onChange={handleChange}
                name="country"
                id="country"
                inputProps={{
                  name: 'country',
                  id: 'country-simple',
                }}
              >
                {countries.map(country => <MenuItem id={country} value={country}>{country}</MenuItem>)}
              </Select>
              <TextField
                label="Cost"
                name="cost"
                id="cost"
                value={values.cost}
                onChange={handleChange}
                type="number"
                margin="normal"
              />
              <Button size="small" onClick={handleClick} disabled={activeStep === 2} >Calculate ROI </Button>
              {calculatedRoi !== 0 && <ul><p>Your cost: $ {values.cost} in {values.country}</p>
                                          <p>Your ROI: $ {calculatedRoi} </p></ul>}
            </FormControl>
          </form>
          </>}
        {chart === 'clicks' && <HighchartsReact highcharts={Highcharts} options={clicksOptions(data, countries)} />}

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