import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Container from '../components/container'
import * as mixins from '../components/mixins.js'

const Styledlink = mixins.styledlink

export const HomePageTemplate = ({ intro }) => {
  return (
<main id="main" className="main" style={{marginTop:'85px'}}>
    
    <section className="hero" style=
    {{ backgroundImage: `url(${intro.introimage})`,
    paddingTop:'100px',
    paddingBottom:'100px',
    }}
    >
    <Container>
      <h3 style={{margin:'0px'}}>{intro.heading}</h3>
      <div style={{
      fontSize:'28px',
      fontWeight:'300',
      }}>
      {intro.subheading}
      </div>
      <Styledlink to={intro.link}>CLICK FOR FREE ACCESS</Styledlink>
      </Container>
    </section>
    
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
        intro={post.frontmatter.intro}
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
        intro{
          heading
          subheading
          link
          introimage
        }
      }
    }
  }
`
