import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 214px;
  color: #ffffff;
  @media (max-width: 767px) {
    max-width: unset;
    height: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .img_logo {
    @media (max-width: 767px) {
      margin-top: 50px;
      width: 136px;
      height: 40px;
    }
  }
`

const GGLabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 107px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: unset;
    height: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .menus {
    display: flex;
    flex-direction: row;
    padding-top: 38px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      padding-top: 0;
    }
  }

  .menu {
    margin-right: 40px;

    :last-child {
      margin-right: 0;
    }

    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`

const CopyrightContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 107px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #747474;
  @media (max-width: 767px) {
    max-width: unset;
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
  }
`

const Footer = () => {
  return (
    <Container>
      <GGLabsContainer>
        <img className="img_logo" src='/config/images/gglabs_logo.svg' />
        <div className="menus">
          <div className="menu">Contact Us</div>
          <div className="menu">Terms &#38; Conditions</div>
          <div className="menu">Privacy Policy</div>
        </div>
      </GGLabsContainer>
      <CopyrightContainer>
        Ⓒ2021 GG Labs All rights reserved
      </CopyrightContainer>
    </Container>
  )
}

export default Footer
