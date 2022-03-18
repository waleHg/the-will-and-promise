import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Quote from '../components/Quote'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const [bible] = get(this, 'props.data.allContentfulQuote.nodes')

    return (
      <Layout location={this.props.location}>



        <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        />

        <Quote

          icon={bible.icon.gatsbyImageData}
          verse={bible.title}
          reference={bible.reference}
        />

        <ArticlePreview posts={posts} />

      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {

    allContentfulQuote(
      filter: { contentful_id: { eq: "5dNnCoPvgLj8wquimKgHxy" } }
    ) {
      nodes {
        title
        reference
        icon: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 48
            height: 48
          )
        }
      }
    }

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }

  
}
`
