import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import * as variable from './variables.js'
const Nav = styled.nav`
  li{
    margin-left:25px;
  }
  a {
    text-decoration: none;
    color: ${variable.darkGray};
    font-weight: 600;
    transition: all 0.2s;
    font-family:Poppins, sans-serif;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    &:hover {
      color: ${variable.red};
    }
  }
`

const Menu = () => (

  <div>
    <Nav>
    <ul style={{
      listStyle:'none',
      display:'flex',
      justifyContent:'flex-end',
    }}>
      <li><Link to="#">Home</Link></li>
      <li><Link to="#">About</Link></li>
      <li><Link to="#">Portfolio</Link></li>
      <li><Link to="#">Contact</Link></li>
    </ul>
    </Nav>
  </div>
    
)


export default Menu
