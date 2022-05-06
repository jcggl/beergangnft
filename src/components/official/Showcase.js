import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 122px 50px;

  @media (max-width: 992px) {
    padding: 66px 50px;
  }
  @media (max-width: 767px) {
    padding: 38px 20px;
  }

  .title {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 120px;
    line-height: 120px;
    color: #ffffff;

    @media (max-width: 992px) {
      font-size: 80px;
      line-height: 100px;
    }
    @media (max-width: 767px) {
      font-size: 48px;
      line-height: 56px;
    }
  }

  .main_image {
    margin-top: 40px;

    @media (max-width: 992px) {
      margin-top: 20px;
    }
    @media (max-width: 767px) {
      margin-top: 16px;
    }
  }

  .desc {
    margin-top: 34px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 42px;
    color: #e4e4e7;

    @media (max-width: 992px) {
      margin-top: 20px;
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: 14px;
      line-height: 24px;
    }
  }

  .button {
    background: url('/config/images/official/showcase_button.png') no-repeat;
    background-size: contain;
    margin-top: 34px;
    width: 570px;
    height: 90px;
    border: 0;
    cursor: pointer;

    @media (max-width: 992px) {
      margin-top: 22px;
      width: 446px;
    }
    @media (max-width: 767px) {
      margin-top: 20px;
      width: 100%;
      max-width: 320px;
    }
  }
`

const Showcase = ({ showcaseRef }) => {
  const onClickImg = () => {
    window.open('https://pleasant-mousy-jackfruit.glitch.me/', '_blank')
  }

  return (
    <Container ref={showcaseRef}>
      <div className="title">Showcase</div>
      <img src="/config/images/official/showcase_main.png" className="main_image" onClick={onClickImg} />
      <div className="desc">
        Click each tribe to see how Beergangs work in Metaverse. Express your true identity through Beergang. They will
        mirror your facial expressions and gestures!
      </div>
      <button className="button" />
    </Container>
  )
}

export default Showcase
