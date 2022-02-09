import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1194px;
  align-items: center;
  margin-top: -201px;

  .img_box {
    display: flex;
  }

  .up_img {
    margin-top: 0;
  }

  .down_img {
    margin-top: 127px;
    margin-left: -7px;
    margin-right: 14px;
    :last-child {
      margin-right: 0;
    }
  }

  .desc_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin-top: -35px;
  }

  .about {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 120px;
    line-height: 120px;
    color: #ffffff;
  }

  .desc1 {
    margin-top: 60px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 50px;
    color: #FAFAFA;
  }

  .desc2 {
    margin-top: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    color: #71717A;
  }
`

const About = () => {

  return (
    <Container>
      <div className="img_box">
        <div className="up_img"><img src="/config/images/official/img_avatar_lyquid.png"/></div>
        <div className="down_img"><img src="/config/images/official/img_avatar_lyquid2.png"/></div>
        <div className="up_img"><img src="/config/images/official/img_avatar_lyquid3.png"/></div>
        <div className="down_img"><img src="/config/images/official/img_avatar_lyquid4.png"/></div>
      </div>
      <div className="desc_box">
        <div className="about">About Beergang</div>
        <div className="desc1">Beergang is a collection of 10,000 unique NFT avatars built on the Homebrew Algorithm created by GoodGang Labs and stored on the Ethereum blockchain network and IPFS.</div>
        <div className="desc2">Beergang holders will receive various membership benefits. Typically, you will receive a PASS to enter GangHouse, a private 3D metaverse Pub (equivalent yet more interactive metaverse space of our Discord server) that will be launched in Q2 this year. In GangHouse, a real metaverse space, you will be able to experience and create together the future by communicating with members through text messages, voice, and video chat from various backgrounds with common interests (Web 3.0, Metaverse). People may earn virtual currency through completing various missions (i.e. selling information, Bartending, DJing, hosting events).</div>
      </div>
    </Container>
  )
}

export default About
