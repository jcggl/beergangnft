import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 96px;
  color: #ffffff;
  @media (max-width: 767px) {
    max-width: unset;
    height: 62px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .logo {
    width: 111px;
    height: 27px;
    @media (max-width: 767px) {
      width: 82px;
      height: 20px;
    }
  }

  .side_menu {
    display: flex;
    flex-direction: row;
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 24px;
    :last-child {
      margin-right: 0;
    }
    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <img className="logo" src='/config/images/beerganglogo.svg' />
      <div className="side_menu">
        <img className="icon" src='/config/images/opensea.svg' />
        <img className="icon" src='/config/images/twitter.svg' />
        <img className="icon" src='/config/images/discord.svg' />
      </div>
    </Container>
  )
}

export default Header
