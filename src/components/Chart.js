import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, Divider } from '@material-ui/core'

import {setRoiOptions, setPopulationOptions} from '../lib/chartOptions';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  roiChart: {
    marginBottom: 75
  },
  popChart: {
    marginTop: 75,
  }

});

const Chart = ({data}) => {
  const classes = useStyles()
  return (
    <>
      {!data && <p>loading data</p>}
      {data && (
        <div className={classes.root}>
          <div className={classes.roiChart}>
            <HighchartsReact highcharts={Highcharts} options={setRoiOptions(data)} />
          </div>
          <Divider variant="middle" />
          <div className={classes.popChart}>
            <HighchartsReact highcharts={Highcharts} options={setPopulationOptions(data)} />
          </div>
        </div>
      )}
    </>
  )
}

export default Chart