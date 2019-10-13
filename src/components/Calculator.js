import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import { availableCharts } from "../lib/chartOptions"

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: 275,
    backgroundColor: "white",
    disabled: "opacity: 0",
  },
  disabledBtn: 0,
})

const Calculator = ({ data }) => {
  return <div>here be a calculator</div>
}

export default Calculator
