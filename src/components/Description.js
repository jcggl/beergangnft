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

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .texts {
    margin-bottom: 36px;
    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
  }

  .bold_texts {
    font-weight: bold;
    margin-bottom: 36px;
    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
  }
`

const Description = () => {
  return (
    <Container>
      <div className="bold_texts">Introducing GoodGang Labs' first project, Beergang NFT Avatar Collection.</div>
      <div className="texts">GoodGang Labs is building the Metaverse Private Web 3.0 community, and our mission is to make the world fun and a better place by helping people express their true identities and use their passion and talents to generate legitimate revenues.</div>
      <div className="texts">GoodGang Labs is made up of professionals with more than 10 years of experience in Metaverse, Community, Avatar, and AR related projects in global IT top tier companies (Facebook, Naver, Line, Snow, and more.) Currently, members live and work remotely in major global cities (San Francisco, Seoul, Hawaii, and Vancouver). The Beergang character has a unique charm that blends with the various experiences of the members.</div>
    </Container>
  )
}

export default Description
