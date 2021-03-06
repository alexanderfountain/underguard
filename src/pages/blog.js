import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import Video from '../videos/meeting.mp4'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import BlogTeaser from "../components/entity/blog/blog-teaser"
const BlogTeaserContainer = styled.div`
.blog-index-container{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding:50px 0px;
  border-bottom: thin solid #eee;
  @media (max-width: ${variable.mobileWidth}) {
    flex-direction: column-reverse;
  }
  .blog-teaser{
    margin-bottom: 40px;
    flex-basis: calc((100%)/3 - 14px);
    margin-right: 20px;
    &:nth-child(3n+3){
      margin-right: 0px;
    }
  }
}
`
export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
              <Helmet>
      <meta charSet="utf-8" />
      <title>Underguard Teleservices | Blog</title>
      <link rel="canonical" href="https://ugteleservices.com/blog"></link>
      </Helmet>
        <section className="section">
            <div className="content blog-index-header" style={{
              position:'relative',
              borderBottom: '1px solid #eee',
            }}>
            
            <div id="video-viewport">
            <video autoPlay loop>
            <source src={Video} type="video/mp4" />
            </video>
            </div>
            <div className="header-top-video" style={{
              paddinTop:'100px',
              paddingBottom:'100px',
              position:'absolute',
              top:'30%',
              width:'100%',
            }}>
            <Container style={{
              textAlign:'center',
            }}>
            <h1>Blog</h1>

            </Container>
            </div>
            </div>
            <BlogTeaserContainer>
          <Container className="container blog-index">
          <div className="blog-index-container">
            {posts
              .map((post) => (
                <BlogTeaser
                key={post.node.id}
                post={post}
                >
                </BlogTeaser>
                
              ))}
              </div>
          </Container>
          </BlogTeaserContainer>
        </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            description
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image{
              childImageSharp {
                fluid(maxWidth: 345, maxHeight: 230) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author
          }
        }
      }
    }
  }
`