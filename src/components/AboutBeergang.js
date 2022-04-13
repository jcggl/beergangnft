import React from 'react'
import styled from 'styled-components'

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
  margin-top: 170px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 767px) {
    max-width: unset;
    margin-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .texts {
    margin-bottom: 36px;

    :last-child {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 24px;
    }
  }

  .title {
    margin-bottom: 24px;
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 108px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    @media (max-width: 767px) {
      font-size: 48px;
      line-height: 58px;
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
    padding: 2px 16px;
    color: #000000;
    background: #ff6700;

    @media (max-width: 767px) {
      padding: 8px 20px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .description {
    margin-top: 14px;
    padding: 0 120px;

    @media (max-width: 767px) {
      margin-top: 0;
      padding: 0;
    }
  }
`

const AboutBeergang = () => {
  return (
    <Container>
      <div className="title">Cheers to Beergang</div>
      <div className="texts">
        <span className="subtitle">The GOOD Web 3.0 Community on Metaverse</span>
      </div>
      <div className="description">
        <div className="texts">
          Beergang is a collection of 10,000 avatars built on the Homebrew Algorithm created by GoodGang Labs and stored
          on the Ethereum blockchain network and IPFS.
          <br />
          Using beer and pub culture as a motif,
          <br />
          Beergang is the world's first emotionally interactive full-body 3D NFT avatar.
        </div>
        <div className="texts">
          Our growing team includes professionals from global top-tier tech companies (Google, Meta, Naver, Line, Snow)
          with over ten years of experience in Metaverse, Avatar, VR/AR, Community and AI.
        </div>
        <div className="texts">
          We are backed by partners from Meta, Snap, Naver, Kakao, Planetarium, Kimgisa Lab, and other leading
          investors.
        </div>
        <div className="texts">
          There will be more Beergang related updates soon
          <br />
          STAY TUNED FOR MORE!
        </div>
      </div>
    </Container>
  )
}

export default AboutBeergang
