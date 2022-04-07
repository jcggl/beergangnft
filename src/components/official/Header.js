import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 96px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;

  @media (max-width: 767px) {
    height: 60px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1680px;
    margin-left: 120px;
    margin-right: 120px;

    @media (max-width: 767px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .logo {
    width: 184px;
    height: 27px;
    margin-top: 45px;

    @media (max-width: 767px) {
      width: 109px;
      height: 16px;
      margin-top: 22px;
    }
  }

  .menu_button {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      width: 24px;
      height: 24px;
      margin-top: 18px;
    }
  }

  .side {
    display: flex;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .mobile_side {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 44px;
      padding-left: 20px;
      padding-right: 20px;
      background: rgba(0, 0, 0, 0.8);
    }
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

    @media (max-width: 767px) {
      font-size: 24px;
      text-align: right;
      margin-top: 32px;
      margin-right: 0;
    }
  }

  .lang_box {
    margin-top: 50px;
    margin-left: 30px;

    @media (max-width: 767px) {
      display: flex;
      justify-content: right;
      margin-top: 30px;
      margin-bottom: 24px;
      margin-left: 0;
    }
  }

  .select_box {
    background: inherit;
    color: #fff;
    border: none;
    width: 74px;

    @media (max-width: 767px) {
      width: 89px;
      height: 32px;
      background-color: #101010;
      border-radius: 4px;
    }
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Container>
      <div className="box">
        <a href="/official">
          <img className="logo" src="/config/images/logo/Beergang.png" />
        </a>
        {!isMenuOpen && (
          <div className="menu_button" onClick={handleMenuClick}>
            <img src="/config/images/official/icon_menu.png" />
          </div>
        )}
        {isMenuOpen && (
          <div className="menu_button" onClick={handleMenuClose}>
            <img src="/config/images/official/icon_x.png" />
          </div>
        )}
        <div className="side">
          <div className="menu">About</div>
          <div className="menu">Showcase</div>
          <div className="menu">Roadmap</div>
          <div className="menu">Community</div>
          <div className="menu">Team</div>
          <div className="lang_box">
            <select name="lang" className="select_box">
              <option value="en_US">🇺🇸 EN</option>
              <option value="ko_KR">🇰🇷 KR</option>
            </select>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile_side">
          <div className="menu">About</div>
          <div className="menu">Showcase</div>
          <div className="menu">Roadmap</div>
          <div className="menu">Community</div>
          <div className="menu">Team</div>
          <div className="lang_box">
            <select name="lang" className="select_box">
              <option value="en_US">🇺🇸 EN</option>
              <option value="ko_KR">🇰🇷 KR</option>
            </select>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Header
