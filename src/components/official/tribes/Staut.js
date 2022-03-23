import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    max-width: 264px;
    margin-bottom: 0;
  }

  .main_img {
    width: 588px;
    height: 588px;
    margin-top: 56px;
    margin-bottom: 38px;

    @media (max-width: 767px) {
      width: 264px;
      height: 264px;
      margin-top: 34px;
      margin-bottom: 16px;
    }
  }

  .chat_img {
    width: 254px;
    height: 226px;
    position: absolute;
    margin-left: 61px;

    @media (max-width: 767px) {
      width: 124px;
      height: 110px;
      margin-left: 16px;
    }
  }

  .staut_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: #48c4b5;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .staut_abv {
      font-size: 34px;
      line-height: 42px;
      color: #ffffff;

      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 8px;
      }
    }
  }

  .staut_desc {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #a1a1aa;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`

const Staut = () => {
  return (
    <Container>
      <img className="main_img" src="/config/images/official/img_avatar_staut.png" />
      <img className="chat_img" src="/config/images/official/img_avatar_staut_chat@3x.png" />
      <div className="staut_title">
        Staut <span className="staut_abv">5.5% ABV</span>
      </div>
      <div className="staut_desc">
        The second stream swept away a field of barley along the river. The crop dissolved into the water and slowly
        caused a chemical reaction. The cell infused the barley property with its own cell division and digested its
        dark complexion and velvety property. The slow fermentation process created a relaxed personality for Staut. As
        a tribe that mostly settled in a mild climate, they have a talent for art and energy to have fun. They are known
        for dancing and singing at all times. Most are very sociable and chill, so they act as a mediator among the
        Beergang tribes. As much as they like people, they are very much into dating as well so they cause a lot of
        drama.
      </div>
    </Container>
  )
}

export default Staut
