import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  max-width: 1680px;
  height: 96px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);

  .logo {
    width: 184px;
    height: 27px;
    margin-top: 45px;
  }

  .side {
    display: flex;
  }

  .menu {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    margin-top: 50px;
    margin-right: 24px;
    :last-child {
      margin-right: 0;
    }
  }
`

const Header = () => {

  return (
    <Container>
      <a href="/official"><img className="logo" src='/config/images/logo/Beergang.png' /></a>
      <div className="side">
        <div className="menu">About</div>
        <div className="menu">Showcase</div>
        <div className="menu">Total Distribution</div>
        <div className="menu">Utilities</div>
        <div className="menu">Information</div>
      </div>
    </Container>
  )
}

export default Header
