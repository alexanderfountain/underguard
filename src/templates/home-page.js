import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Typing from 'react-typing-animation'
import Container from '../components/container'
import * as mixins from '../components/mixins.js'
import Fade from 'react-reveal/Fade'
import * as variable from '../components/variables'
import styled from 'styled-components'

const Styledlink = mixins.styledlink

const Leftcontact = styled.div`
flex-basis:50%;
border-right:thin solid gray;
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
}
`
const Rightcontact = styled.div`
flex-basis:50%;
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
}
`

export const HomePageTemplate = ({ intro, contact }) => {
  return (
<main id="main" className="main" style={{marginTop:'85px'}}>
    
    <section className="hero" style=
    {{ backgroundImage: `url(${intro.introimage})`,
    paddingTop:'150px',
    paddingBottom:'150px',
    backgroundSize:'cover',
    }}
    >
    <Container>
      <Fade bottom>
      <Typing>
      <h3 style={{margin:'0px'}}>{intro.heading}</h3>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={20} />
      <h3 style={{margin:'0px'}}>{intro.heading2}</h3>
      </Typing>
      
      <div style={{
      fontSize:'28px',
      fontWeight:'300',
      }}>
      {intro.subheading}
      </div>
      <Styledlink to={intro.link}>CLICK FOR FREE ACCESS</Styledlink>
      </Fade>
      </Container>
    </section>

    <section id="contact">
    <Container style={{
      padding:'150px 20px',
      display:'flex',
      flexWrap:'wrap',
    }}>
      <Leftcontact>
  
      </Leftcontact>
      <Rightcontact>
      </Rightcontact>
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

}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HomePageTemplate
        intro={post.frontmatter.intro}
        contact={post.frontmatter.contact}
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
      html
      frontmatter {
        intro{
          heading
          heading2
          subheading
          link
          introimage
        }
        contact{
          contactleft
        }
      }
    }
  }
`
