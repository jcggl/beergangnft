import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 69px;
  margin-bottom: 160px;
  width: 100%;
  max-width: 1200px;
  color: #ffffff;

  @media (max-width: 767px) {
    max-width: unset;
    margin-top: 60px;
    margin-bottom: 120px;
    padding: 0 20px;
  }
`

const TwitterButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 68px;
  background: #4fa5f1;
  border-radius: 2px;
  text-decoration: none;
  margin-right: 24px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: unset;
    min-width: 152px;
    height: 40px;
    margin-right: 16px;
  }

  .text {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    padding-right: 20px;
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 18px;
    }
  }

  .img_logo {
    width: 40px;
    height: 40px;
    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }
  }
`

const DiscordButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 68px;
  background: #f14f80;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 767px) {
    width: unset;
    min-width: 152px;
    height: 40px;
  }

  .text {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    padding-right: 20px;
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 18px;
    }
  }

  .img_logo {
    width: 40px;
    height: 40px;
    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }
  }
`

const JoinButtons = () => {
  return (
    <Container>
      <TwitterButton href="https://twitter.com/beergang_nft" target="_blank">
        <div className="text">Join Twitter</div>
        <img className="img_logo" src="/config/images/twitter.svg" />
      </TwitterButton>
      <DiscordButton href="https://www.instagram.com/beergang_nft/" target="_blank">
        <div className="text">Join Discord</div>
        <img className="img_logo" src="/config/images/instagram.svg" />
      </DiscordButton>
    </Container>
  )
}

export default JoinButtons
