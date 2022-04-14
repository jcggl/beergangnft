import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 96px;
  color: #ffffff;
  @media (max-width: 767px) {
    max-width: unset;
    height: 62px;
    padding-top: 30px;
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
    background: inherit;
    color: #fff;
    border: none;
    width: 122px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .select_box_mobile {
    display: none;
    @media (max-width: 767px) {
      display: flex;
      background: inherit;
      color: #fff;
      border: none;
    }
  }
`

const Header = ({ lang }) => {
  const handleChange = (e) => {
    const targetLang = e.target.value

    if (targetLang === 'ko_KR') {
      window.location = '/teaser/kr'
      return
    }

    window.location = '/teaser'
  }

  return (
    <Container>
      <a href="/teaser">
        <img className="logo" src="/config/images/logo/Beergang.png" />
      </a>
      <div className="side_menu">
        {/* <img className="icon" src='/config/images/opensea.svg' /> */}
        <a href="https://twitter.com/beergang_nft" target="_blank">
          <img className="icon" src="/config/images/twitter.svg" />
        </a>
        <a href="https://www.instagram.com/beergang_nft/" target="_blank">
          <img className="icon" src="/config/images/instagram.svg" />
        </a>
        {/*<select name="lang" className="select_box" onChange={handleChange} defaultValue={lang}>*/}
        {/*  <option value="en_US">🇺🇸 English</option>*/}
        {/*  <option value="ko_KR">🇰🇷 한국어</option>*/}
        {/*</select>*/}
        {/*<select name="lang" className="select_box_mobile" onChange={handleChange} defaultValue={lang}>*/}
        {/*  <option value="en_US">🇺🇸</option>*/}
        {/*  <option value="ko_KR">🇰🇷</option>*/}
        {/*</select>*/}
      </div>
    </Container>
  )
}

export default Header
