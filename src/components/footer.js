import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import * as variable from './variables.js'
const Footer = () => (
  <footer style={{
    backgroundColor:variable.darkGray,
    color:'#ffffff',
    }}>
  
 
    <Container style={{
      display:'flex',
    }}>

      <div className="footer-red" style={{
        flexBasis:'30%',
        backgroundColor:variable.red,
        padding:'40px 0px',
        position:'relative',
      }}>
      <h4>CONTACT US</h4>
      <p>7860 North Park Place</p>
      <p>San Francisco, CA 94120</p>
      <p>555-555-1234</p>
      </div>
      <div style={{
        flexBasis:'70%',
        padding:'40px 0px',
        paddingLeft:'20px',
      }}>
      <h4>ABOUT US</h4>
      <p>Digital Pro is an agency that will help you discover smarter ways to sell profitable digital products.</p>
      </div>

    </Container>

  </footer>

    
)


export default Footer
