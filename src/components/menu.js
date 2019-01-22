import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Menu = () => (

  <div>
    <ul style={{
      listStyle:'none',
      display:'flex',
      justifyContent:'space-between',
    }}>
      <li><Link to="#">Home</Link></li>
      <li><Link to="#">About</Link></li>
      <li><Link to="#">Portfolio</Link></li>
      <li><Link to="#">Contact</Link></li>
    </ul>
  </div>
    
)


export default Menu
