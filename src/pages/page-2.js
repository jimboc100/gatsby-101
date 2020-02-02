import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>SOme stuff about me</h1>
    <p>I am not a fan of public <Link to="/speaking">Speaking</Link></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
