import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    padding: "25px",
  },
  table: {
    minWidth: 650,
  },
}))

export default ({ data }) => {
  const edges = data.allChartStatsCsv.edges
  const tableHeaders = edges.map(e => Object.keys(e.node))[0]

  const filteredHeaders = tableHeaders.filter(h => h !== "Country")
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="table" />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="node">
                <b>Country</b>
              </TableCell>
              {filteredHeaders.map(header => (
                <>
                  <TableCell align="right">
                    <b>{header}</b>
                  </TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {edges.map(({ node }) => (
              <TableRow key={node.id}>
                <TableCell component="th" scope="node">
                  <b>{node.Country}</b>
                </TableCell>
                <TableCell align="right">{node.Average_CPC}</TableCell>
                <TableCell align="right">{node.CPA}</TableCell>
                <TableCell align="right">{node.CTR}</TableCell>
                <TableCell align="right">{node.Clicks}</TableCell>
                <TableCell align="right">{node.Conversion_Ratio}</TableCell>
                <TableCell align="right">{node.Conversions}</TableCell>
                <TableCell align="right">{node.Cost}</TableCell>
                <TableCell align="right">{node.EPC}</TableCell>
                <TableCell align="right">{node.Impressions}</TableCell>
                <TableCell align="right">{node.ROI}</TableCell>
                <TableCell align="right">{node.Revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allChartStatsCsv {
      edges {
        node {
          id
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
