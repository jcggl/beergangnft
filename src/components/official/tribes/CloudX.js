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
    margin-top: 64px;
    margin-bottom: 38px;

    @media (max-width: 767px) {
      width: 264px;
      height: 264px;
      margin-top: 34px;
      margin-bottom: 16px;
    }
  }

  .chat_img {
    width: 338px;
    height: 266px;
    position: absolute;
    margin-left: 221px;

    @media (max-width: 767px) {
      width: 155px;
      height: 122px;
      margin-left: 95px;
    }
  }

  .cloudx_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: #4459ff;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .cloudx_abv {
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

  .cloudx_desc {
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

const CloudX = () => {
  return (
    <Container>
      <img className="main_img" src="/config/images/official/img_avatar_cloudx.png" />
      <img className="chat_img" src="/config/images/official/img_avatar_cloudx_chat@3x.png" />
      <div className="cloudx_title">
        Cloud X <span className="cloudx_abv">12% ABV</span>
      </div>
      <div className="cloudx_desc">
        Lucky enough, the cell of Cloud X went through a cold stream that didn’t form any bubbles or chemical reactions.
        Like the eye of the tornado, the third stream was calm. Due to abundant sodalite, it made Cloud X blue and
        chill. They reside in the northernmost part of the continent, where it’s cold. They have the most strategic and
        smart individuals so they contributed the most to the development of Beergang technology. With their much
        interest in technology, a lot of them are early adapters. There are rumors that they are getting smarter by
        fixing them as they often break down due to the cold weather.
      </div>
    </Container>
  )
}

export default CloudX
