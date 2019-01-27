import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import * as variable from '../components/variables'
import styled from 'styled-components'

export const BlogPostTemplate = ({
  frontmatter,
  title,
  image,
}) => {
  console.log({frontmatter})
  return (

    <Layout>
      <section className="section">
      <Container>
      <h1>{title}</h1>
      <div><img src={image} /></div>
      </Container>
      </section>
      </Layout>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <BlogPostTemplate
        frontmatter={post.frontmatter}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        image
        author
      }
    }
  }
`
