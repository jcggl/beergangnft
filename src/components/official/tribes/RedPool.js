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
    width: 60vw;
    max-width: 264px;
    margin-bottom: 0;
  }

  .redpool_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: #fe4650;
    margin-top: 34px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .redpool_abv {
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

  .redpool_desc {
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

const RedPool = () => {
  return (
    <Container>
      <video preload="true" autoPlay playsInline loop muted className="video-tag">
        <source src="https://d3n7wfb7g7ygbc.cloudfront.net/maintwitt_red.mp4" type="video/mp4" />
      </video>
      <div className="redpool_title">
        RedPool <span className="redpool_abv">67.5% ABV</span>
      </div>
      <div className="redpool_desc">
        Last but not least, the last remaining cell was swept through the river due to an unusual wave of tide. It was
        almost like a sea monster swallowing the cell alive. Even the sodium level was high to the point where it
        increase the blood pressure for Red Pool. Such temper and high blood pressure were embedded in Red Pool’s
        personality. They live in the southern part of the continent around the huge volcanic region called Flamin Hot
        where the origin and history of Alcohol Planet started. Like volcanoes that could erupt anytime, they are always
        angry and excited. They are also physically strong as well. They are really passionate as well as they work out
        all the time to suppress their anger. <br />
        <br />
        ⚠️Caution: If you see Cloud X and Red Pool together, leave immediately. They are the polar opposite.
      </div>
    </Container>
  )
}

export default RedPool
