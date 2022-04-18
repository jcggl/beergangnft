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
`

const Header = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menus = ['About', 'Showcase', 'Roadmap', 'Community', 'Team']

  const onClickMenu = (num) => {
    refs[num].current.scrollIntoView({ behavior: 'smooth' })
  }

  const ShowMenus = () => {
    return menus.map((menu, idx) => (
      <div className="menu" key={`menu${idx}`} onClick={() => onClickMenu(idx)}>
        {menu}
      </div>
    ))
  }

  const handleMenuClick = () => {
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Container>
      <div className="box">
        <img className="logo" src="/config/images/logo/Beergang.png" />
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
          <ShowMenus />
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile_side">
          <ShowMenus />
        </div>
      )}
    </Container>
  )
}

export default Header
