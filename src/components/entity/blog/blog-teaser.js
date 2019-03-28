import React from 'react'
import { Link } from 'gatsby'
import * as variable from '../../variables'
import styled from 'styled-components'

const BlogTeaserContainer = styled.div`
padding:50px 0px;
@media (max-width: ${variable.mobileWidth}) {
  flex-direction: column-reverse;
}
.teaser-body{
  line-height:1.3em;
}

`
const BlogTeaserLeft = styled.div`
/* flex-basis:calc(50% - 20px); */
h2{
    margin-top:5px;
    a{
      color:${variable.brand1};
      font-weight:400;
      line-height:1.1em;
    }
    margin-bottom:10px !important;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
.has-text-primary{
    border-bottom:0px;
}
`
const BlogTeaserRight = styled.div`
/* flex-basis:calc(50% - 20px); */
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
.blog-teaser-image{
    text-align:center;
}
`

const BlogTeaser = ({post}) => {
return(
<BlogTeaserContainer className="blog-teaser">
  <BlogTeaserRight>
  <div className="blog-teaser-image">
    <img src={post.node.frontmatter.image} />
    </div>
  </BlogTeaserRight>
  <BlogTeaserLeft>
  {/* <div className="who">
  <span className="blog-date">{post.node.frontmatter.date} / </span> 
  <span className="blog-teaser-author">{post.node.frontmatter.author}</span>
  </div> */}
  <h2>
  <Link className="has-text-primary" to={post.node.fields.slug}>
    {post.node.frontmatter.title}
  </Link>
  </h2>
  <div className="teaser-body">
  {post.node.frontmatter.description}
  </div>
  <Link className="btn blog-btn" to={post.node.fields.slug}>
    Read Full Article
  </Link>
  </BlogTeaserLeft>
</BlogTeaserContainer>
)
  }

export default BlogTeaser