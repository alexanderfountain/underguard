import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

export const HomePageTemplate = ({ title, intro, services, content, contentComponent }) => {
  return (
<main id="main" className="main">
  
tester
  </main>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  introheading: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icontext: PropTypes.array,
    })
  ),
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HomePageTemplate
        title={post.frontmatter.title}
        introheading={post.frontmatter.intro.heading}
        introdescription={post.frontmatter.intro.description}
        introimage={post.frontmatter.intro.introimage}
        intro={post.frontmatter.intro}
        services={post.frontmatter.services}
        content={post.html}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        intro{
          heading
          description
          introimage
        }
        services{
          icontext{
            icon
            text
          }
        }
      }
    }
  }
`
