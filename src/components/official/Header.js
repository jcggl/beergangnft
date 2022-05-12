import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 96px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;

  @media (max-width: 992px) {
    height: 74px;
  }

  @media (max-width: 767px) {
    height: 60px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1680px;
    padding: 0 120px;
    backdrop-filter: blur(10px);

    @media (max-width: 992px) {
      padding: 0 50px;
    }
    @media (max-width: 767px) {
      padding: 0 20px;
    }

    .logo {
      width: 184px;
      height: 27px;
      margin-top: 10px;

      @media (max-width: 992px) {
        width: 150px;
        height: 22px;
        margin-top: 0;
      }

      @media (max-width: 767px) {
        width: 109px;
        height: 16px;
        margin-top: 0;
        // padding-top: 22px;
      }
    }

    .menu_button {
      display: none;

      @media (max-width: 992px) {
        display: flex;
      }
      @media (max-width: 767px) {
        display: flex;
        width: 24px;
        height: 24px;
        // margin-top: 18px;
      }
    }

    .side {
      display: flex;
      margin-top: 10px;

      @media (max-width: 992px) {
        display: none;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  .mobile_side {
    display: none;

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 74px;
      padding-right: 50px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 60px;
      padding-left: 20px;
      padding-right: 20px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
  }

  .menu {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    margin-right: 24px;
    cursor: pointer;
    // &:last-child {
    //   margin-right: 0;
    // }

    @media (max-width: 992px) {
      font-size: 44px;
      line-height: 60px;
      text-align: right;
      margin-top: 24px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 24px;
      }
    }
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 22px;
      text-align: right;
      margin-top: 32px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 24px;
      }
    }
  }
`

const Header = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menus = ['About', 'Roadmap', 'Community', 'Team']

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
