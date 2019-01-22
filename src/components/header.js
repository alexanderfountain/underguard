import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../scss/style.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div class="container">
    {siteTitle}
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
