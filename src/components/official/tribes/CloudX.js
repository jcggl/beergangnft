import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  max-width: 588px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    width: unset;
    max-width: 324px;
    margin-bottom: 18px;
  }

  @media (max-width: 767px) {
    width: unset;
    max-width: 264px;
    margin-bottom: 0;
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
      <video preload="true" autoPlay playsInline loop muted className="video-tag">
        <source src="https://jcggl.github.io/publicDrive/main_blue.mp4" type="video/mp4" />
      </video>
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
