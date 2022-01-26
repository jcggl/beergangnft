import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 288px;
  background: #ffffff;
  color: #000000;
  justify-content: center;
  @media (max-width: 767px) {
    max-width: unset;
    height: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }

  .division {
    display: flex;
    flex-direction: column;

    .img_logo {
      width: 150px;
      height: 44px;
      margin-top: 52px;
      margin-bottom: 15px;
      @media (max-width: 767px) {
        margin-top: 0;
        width: 120px;
        height: 35px;
      }
    }

    .copyright {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #A1A1AA;

      @media (max-width: 767px) {
        font-size: 9px;
        line-height: 13px;
        margin-bottom: 26px;
      }
    }

    .menu {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      :first-child {
        margin-top: 58px;
      }
      margin-top: 18px;
      text-align: right;
      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 18px;
        margin-top: 14px;
        :first-child {
          margin-top: 22px;
        }
        :last-child {
          margin-bottom: 88px;
        }
      }

      a:link, a:visited, a:hover {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <div className="box">
        <div className="division">
          <img className="img_logo" src='/config/images/logo/GGlabs/main.png' />
          <span className="copyright">Ⓒ2021 GG Labs All rights reserved</span>
        </div>
        
        <div className="division">
          <div className="menu"><a href="mailto:hello@goodganglabs.com">hello@goodganglabs.com</a></div>
          <div className="menu">Privacy Policy</div>
          <div className="menu"><a href="/teaser/terms">Terms &#38; Conditions</a></div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
