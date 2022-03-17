import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 760px;
  padding: 0 20px;
  background: linear-gradient(182.44deg, #ff6d1b 5.6%, #ff4b32 46.82%, #000000 88.04%);
  align-items: center;
  text-align: center;
  font-family: Anton;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 992px) {
    padding: 0 50px;
    height: 640px;
  }
  @media (max-width: 767px) {
    padding: 0 20px;
    height: 564px;
  }

  .title {
    max-width: 1200px;
    margin-top: 78px;
    font-size: 64px;
    line-height: 90px;
    color: #000000;

    @media (max-width: 992px) {
      margin-top: 50px;
      font-size: 44px;
      line-height: 60px;
    }
    @media (max-width: 767px) {
      margin-top: 40px;
      font-size: 28px;
      line-height: 40px;
    }
  }

  .desc {
    max-width: 1200px;
    margin-top: 34px;
    font-family: Poppins;
    font-size: 20px;
    line-height: 40px;

    @media (max-width: 992px) {
      margin-top: 24px;
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: 767px) {
      margin-top: 16px;
      font-size: 12px;
      line-height: 20px;
    }
  }
`

const Intro = () => {
  return (
    <Container>
      <div className="title">Beergang is the world’s first emotionally interactive full-body 3D NFT avatar</div>
      <div className="desc">
        Introducing Beergang, the first project of GoodGang Labs. Our mission is “To make the world a better place by
        helping people express their true identities and use their passion and talents to generate legitimate revenue in
        a fun way.”
      </div>
    </Container>
  )
}

export default Intro
