import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 214px;
  color: #ffffff;
`

const GGLabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 107px;

  .menus {
    display: flex;
    flex-direction: row;
    padding-top: 38px;
  }

  .menu {
    margin-right: 40px;

    :last-child {
      margin-right: 0;
    }
  }
`

const CopyrightContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 107px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #747474;
`

const Footer = () => {
  return (
    <Container>
      <GGLabsContainer>
        <img src='/config/images/gglabs_logo.svg' />
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
