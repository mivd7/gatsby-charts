import React from "react"
import { Link } from "gatsby"
import Chart from '../components/Chart';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Chart/>
  </Layout>
)

export default IndexPage
