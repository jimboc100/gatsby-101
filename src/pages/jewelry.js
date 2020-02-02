import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query {
        file(relativePath: {eq: "jewelry.jpg"}) {
        childImageSharp {
            fixed(width:800) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    }
`;


const JewelryPage = ({data}) => (
    <Layout>
        <SEO title="Page two" />
        <h1>Jewelry</h1>
        <p>Making Jewelry....</p>
        <Img
            fixed ={data.file.childImageSharp.fixed}
            alt={'jewelry'}
        />
    </Layout>
)

export default JewelryPage
