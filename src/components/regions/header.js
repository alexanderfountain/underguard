import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../layout/container'
import Menu from '../menu'
import styled from "styled-components"
import logo from "../../images/underlogo.png"
import * as variable from '../variables'

const HeaderStyle = styled.header`
  display:flex;
  justify-content:center;
  .header-menu-logo{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color:${variable.darkGray};
    position:fixed;
    width:100%;
    padding-top:20px;
    padding-bottom:20px;  
    z-index:100;
  }
  .logo-menu-below{
    position:absolute;
    top:100px;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    .logo{
      flex-basis:255px;
      border-bottom:none;
      img{
        width:100%;
        height:auto;
        display:flex;
        align-items:center;
      }
    }
  }
  .right-logo-menu{
    ul{
      display:flex;
      padding:0px;
      margin:0px;
      li{
        margin-left:40px;
        list-style:none;
        a{
          color:white;
          text-decoration:none;
          border-bottom:0px;
          &.button-white-border{
            border:2px solid #ffffff;
            border-radius:25px;
            padding:10px 30px;
          }
        }
      }
    }
  }
`;

const Header = () => (
  <HeaderStyle>
      <Container className="header-menu-logo">
      <Menu>
      </Menu>
      </Container>
      <Container className="logo-menu-below">
      <Link className="logo"to="/"><img src={logo} alt="logo" /></Link>
      <div class="right-logo-menu">
      <ul>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a class="button-white-border" href="#">FREE QUOTE</a>
        </li>
      </ul>
      </div>
      </Container>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
