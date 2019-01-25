import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Typing from 'react-typing-animation'
import Container from '../components/container'
import Form from '../components/form'
import * as mixins from '../components/mixins.js'
import Fade from 'react-reveal/Fade'
import * as variable from '../components/variables'
import styled from 'styled-components'

const Styledlink = mixins.styledlink

const Leftcontact = styled.div`
flex-basis:50%;
border-right: 1px solid ${variable.lightGray};
padding:40px 0px;
padding-right:20px;
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
}
`
const Rightcontact = styled.div`
flex-basis:50%;
padding:40px 0px;
padding-left:20px;
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
      <h3 style={{ 
        margin:'0px',
        color: '#232525',
      }}>
      {intro.heading}</h3>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={20} />
      <h3 style={{
        margin:'0px',
        color: '#232525',
        }}>
        {intro.heading2}</h3>
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
      padding:'0px 20px',
      display:'flex',
      flexWrap:'wrap',
    }}>
      <Leftcontact>
      <div dangerouslySetInnerHTML={{ __html: contact.contactleft }} />
      </Leftcontact>
      <Rightcontact>
        <Form>
      <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
								<div class="form-group">
									<label for="name" class="lb-name">First Name *</label>
									<input type="text" name="name" id="name" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<label for="surname" class="lb-surname">Last Name *</label>
									<input type="text" name="surname" id="surname" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<label for="email" class="lb-email">Email *</label>
									<input type="email" name="email" id="email" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<label for="phone" class="lb-phone">Phone Number</label>
									<input type="tel" name="phone" id="phone" class="form-control" data-required="false" data-interactive="true" />
								</div>
								<div class="form-group text">
									<label for="textarea" class="lb-message">Message*</label>
									<textarea name="textarea" id="textarea" class="textarea form-control" data-required="true" data-trim="true"/>
								</div>
								<div>
									<button type="submit" class="btn btn-submit">Send Message</button>
								</div>
							</form>
          </Form>
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
