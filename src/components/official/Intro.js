import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 830px;
  background: linear-gradient(182.44deg, #FF6D1B 5.6%, #FF4B32 46.82%, #000000 88.04%);
  align-items: center;
  text-align: center;
  z-index: 1;

  @media (max-width: 767px) {
    height: 564px;
  }

  .title {
    margin-top: 80px;
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 87px;
    line-height: 110px;
    color: #000000;

    @media (max-width: 767px) {
      margin-top: 40px;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 28px;
      line-height: 40px;
    }
  }

  .desc {
    margin-top: 34px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    max-width: 1200px;

    @media (max-width: 767px) {
      margin-top: 16px;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 12px;
      line-height: 20px;
    }
  }
`

const Intro = () => {

  return (
    <Container>
      <div className="title">The world’s first emotionally<br/>interactive fully 3D NFT avatar</div>
      <div className="desc">Introducing Beergang, the first project of GoodGang Labs.<br/>Our mission is “To make the world a fun and a better place by helping people express their true identity and use their passion and talents to generate legitimate revenue.”</div>
    </Container>
  )
}

export default Intro
