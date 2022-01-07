import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 96px;
  color: #ffffff;
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: row;
  .icon {
    margin-right: 24px;
    :last-child {
      margin-right: 0;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <img src='/config/images/beerganglogo.svg' />
      <SideContainer>
        <div className="icon">
          <img src='/config/images/opensea.svg' />
        </div>
        <div className="icon">
          <img src='/config/images/twitter.svg' />
        </div>
        <div className="icon">
          <img src='/config/images/discord.svg' />
        </div>
      </SideContainer>
    </Container>
  )
}

export default Header
