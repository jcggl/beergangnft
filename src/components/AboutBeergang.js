import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  width: 100%;
  max-width: 996px;
  justify-content: space-between;
  text-align: center;
  color: #ffffff;
  margin-bottom: 88px;

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 50px;
  }

  .texts {
    margin-bottom: 36px;
    :last-child {
      margin-bottom: 0;
    }
    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
  }

  .title {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 135px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    @media (max-width: 767px) {
      font-size: 48px;
      line-height: 58px;
    }

    .highlight {
      color: #FF6700;
    }
  }

  .subtitle {
    width: unset;
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #000000;
    background: #FF6700;

    @media (max-width: 767px) {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`

const AboutBeergang = () => {
  return (
    <Container>
      <div className="title texts">About{' '}<span className="highlight">BEERGANG</span></div>
      <div className="texts"><span className="subtitle">The GOOD Web 3.0 Community on Metaverse</span></div>
      <div className="texts">Beergang is a collection of 10,000 unique NFT avatars built on the Homebrew Algorithm created by GoodGang Labs and stored on the Ethereum blockchain network and IPFS.</div>
      <div className="texts">Beergang holders will receive various membership benefits. Typically, you will receive a PASS to enter GangHouse, a private 3D metaverse Pub that will be launched in Q2 this year. In GangHouse, a real metaverse space, you will be able to experience and create together the future by communicating with members from various backgrounds with common interests (Web 3.0, Metaverse).</div>
      <div className="texts">There will be more Beergang related updates soon, so please stay tuned!<br/>Stay tuned for the latest news and updates on GoodGang Labs' official Twitter and Discord.</div>
    </Container>
  )
}

export default AboutBeergang
