import React from "react"
import { Link, graphql } from "gatsby"
import {Checkbox, List, ListItem, ListItemIcon, ListItemText, Select, MenuItem, Button} from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {chartTypes, customOptions} from '../lib/chartOptions'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto",
//     padding: "25px",
//   },
//   table: {
//     minWidth: 1000,
//   },
// }))

const Composer = ({ data }) => {
    const [pickedProperties, setPickedProperties] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState({})
    const [chartType, setChartType] = React.useState('');
    const [madeSelection, setMadeSelection] = React.useState(false)
    const [isComplete, setIsComplete] = React.useState(false)
    const [options, setOptions] = React.useState({
        selectedCountry: {},
        pickedProperties: [],
        chartType: '',
    })

    const edges = data.allChartStatsCsv.edges

    const tableHeaders = edges.map(e => Object.keys(e.node))[0]
    const countries = edges.map(e => e.node.Country)
    const filteredHeaders = tableHeaders.filter(h => h !== "Country")
    // const classes = useStyles()
    const handleChange = (e) => {
        setSelectedCountry(e.target.value)
        setMadeSelection(true)
    }
    const handleSubmit = () => {
        setOptions({
            selectedCountry,
            pickedProperties,
            chartType
        })
        if(chartType !== '') {
            setIsComplete(true)
    
        } else {
            console.log('not all fields filled!')
        }
    }

    console.log(customOptions(options))
    return (
        <Layout>
        <SEO title="Composer" />
        <h1>Hi and welcome to the composer</h1>
        <p>To start please select a country</p>
        <Select
                value={selectedCountry}
                onChange={handleChange}
                name="country"
                id="country"
                inputProps={{
                  name: 'country',
                  id: 'country-simple',
                }}
              >
                {countries.map(country => <MenuItem id={country} value={edges.find(e => e.node.Country === country)}>{country}</MenuItem>)}
        </Select>

        {madeSelection && <><h2>Now pick the stats you wish to show and press continue</h2>
            <List>
            {filteredHeaders.map(header => 
                <ListItem button>
                <ListItemIcon>
                <Checkbox
                    onChange={(e) => setPickedProperties(arr => [...arr, e.target.value])}
                    value={header}
                    inputProps={{
                    'aria-label': 'primary checkbox',
                    }}
                />
                </ListItemIcon>
                <ListItemText primary={header.replace('_', ' ')} />
                </ListItem>)}
            </List>
            
            <h2>Finally select what type chart you want to use to display these stats</h2>
            <Select
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
                name="country"
                id="country"
                inputProps={{
                  name: 'country',
                  id: 'country-simple',
                }}
              >
                {chartTypes.map(type => <MenuItem id={chartTypes.indexOf(type)} value={type}>{type}</MenuItem>)}
            </Select>
            <Button onClick={handleSubmit}>Continue</Button>
            </>}

        <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export const query = graphql`
  query {
    allChartStatsCsv {
      edges {
        node {
          Average_CPC
          CPA
          CTR
          Clicks
          Conversion_Ratio
          Conversions
          Cost
          Country
          EPC
          Impressions
          ROI
          Revenue
        }
      }
    }
  }
`

export default Composer