import React from "react"
import { Link, graphql } from "gatsby"
import Chart from "../components/Chart"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const csv = data.allChartStatsCsv.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Chart data={csv} />
      <Link to="/table">See table</Link>
      <br />
      <Link to="/composer">Compose your own charts</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allChartStatsCsv {
      edges {
        node {
          Country
          Average_CPC
          CPA
          CTR
          Clicks
          Conversion_Ratio
          Conversions
          Cost
          EPC
          Impressions
          ROI
          Revenue
          Population
        }
      }
    }
  }
`
