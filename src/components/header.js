import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from './container'
import Menu from './menu'
const Header = ({ siteTitle }) => (
  <header>
      <div style={{
      backgroundColor:'#ffffff',
      borderBottom: '1px solid transparent',
      padding: '28px 30px',
      position: 'fixed',
      top: '0px',
      width: '100%',
      zIndex: '999'
      }}>

      <div style={{
        display:'flex',
        justifyContent: 'space-between',
      }}>
      <div className="logo" style={{
        fontWeight: 'bold',
        fontSize: '26px',
        fontFamily: 'Poppins, sans-serif',
        color: '#232525',
        fontWeight: '700',
        webkitFontSmoothing: 'antialiased',
      }}>DIGITAL PRO</div>
      <div style={{
        flexBasis:'60%',
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
