import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import styled from 'styled-components'

export default class PodcastsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Underguard Teleservices | Blog</title>
          <link rel="canonical" href="https://ugteleservices.com/blog"></link>
        </Helmet>
        <section
          className="section"
          style={{ minHeight: '90vh', paddingTop: 120 }}
        >
          <div className="text-indigo-500">yoyo</div>
        </section>
      </Layout>
    )
  }
}
