import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Top Fives!</h1>
    <p>A site commited to displaying all the top fives of all types of 'thing' in the world!</p>
    <h2>Animals</h2>
    <ul>
      <li>Squirrell</li>
      <li>Dog</li>
      <li>Wolf</li>
      <li>Tiger (white)</li>
      <li>Seal</li>
    </ul>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
