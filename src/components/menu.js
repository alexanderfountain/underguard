import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as variable from './variables.js'
import Mobilemenu from './mobilemenu'
const Nav = styled.nav`
  ul{
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    justify-content:space-between;
  }
  li{
    margin-left:25px;
    margin-bottom:0px;
    text-decoration:none;
    &.number{
      color:${variable.brand1};
      a{
        color:${variable.brand1};
      }
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    transition: all 0.2s;
    font-family:Poppins, sans-serif;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    text-decoration:none;
    border-bottom:0px;
    &:hover {
      color: ${variable.brand1};
      text-decoration: line-through;
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    display:none;
  }
`

const Menu = () => (

  <StaticQuery
  query={graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuLinks{
            name
            link
          }
        }
      }
    }
  `}
  render={data => (
    <>
    <Nav>
    <ul>
      {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
      <li class="number">US. CA. <a href="tel:+1-763-742-2022">+1-763-742-2022</a></li>
    </ul>
    </Nav>
    <Mobilemenu />
  </>
  )}
  />
)


export default Menu
