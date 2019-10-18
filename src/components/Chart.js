import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, Grid, Divider } from "@material-ui/core"

import CountrySelector from "./CountrySelector"
import { setRoiOptions, setPopulationOptions } from "../lib/chartOptions"
// import countries from "../lib/countries"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // width: '100%',
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 50
  },
  divider: {
    margin: '37.5px 0'
  }
}))

const Chart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {!data && <p>loading data</p>}
      {data && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <HighchartsReact
                className={classes.paper}
                highcharts={Highcharts}
                options={setRoiOptions(data)}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={9}>
              <HighchartsReact
                className={classes.paper}
                highcharts={Highcharts}
                options={setPopulationOptions(data)}
              />
            </Grid>
            <Grid item xs={3}>
              <div className={classes.paper}>
                <CountrySelector data={data} />
              </div>
            </Grid>
          </Grid>
      )}
    </div>
  )
}

export default Chart
