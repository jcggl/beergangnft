import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: absolute;
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
    width: 186px;
    height: 28px;
    @media (max-width: 767px) {
      width: 88px;
      height: 13px;
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
    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }

  .select_box {
    background: #000;
    color: #fff;
    border: none;
    width: 122px;
    @media (max-width: 767px) {
      width: unset;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <img className="logo" src='/config/images/logo/Beergang.png' />
      <div className="side_menu">
        {/* <img className="icon" src='/config/images/opensea.svg' /> */}
        <img className="icon" src='/config/images/twitter.svg' />
        <img className="icon" src='/config/images/discord.svg' />
        <select name="lang" className="select_box">
          <option value="en_US">🇺🇸 English</option>
          <option value="ko_KR">🇰🇷 한국어</option>
        </select>
      </div>
    </Container>
  )
}

export default Header
