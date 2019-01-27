import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import Menu from './menu'

import Logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  <header>
      <div style={{
      backgroundColor:'#ffffff',
      borderBottom: '1px solid transparent',
      padding: '10px 20px',
      position: 'fixed',
      top: '0px',
      width: '100%',
      zIndex: '999',
      }}>

      <div style={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div className="logo" style={{
        flexBasis:'150px',
      }}><Link to="/" style={{borderBottom:'none',}}><img src={Logo} alt="Underguard logo" style={{
        width:'100%',
        height:'auto',
        display:'flex',
        alignItems:'center',
      }} /></Link></div>
      <div style={{
        flexBasis:'calc(60% - 200px)',
        display:'flex',
        justifyContent:'flex-end',
      }}>
      <Menu></Menu>
      </div>
      </div>


    </div>

  </header>
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
