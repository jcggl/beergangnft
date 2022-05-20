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

  .lyquid_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: #ff9016;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .lyquid_abv {
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

  .lyquid_desc {
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

const Lyquid = () => {
  return (
    <Container>
      <video preload="true" autoPlay playsInline loop muted className="video-tag">
        <source src="https://d3n7wfb7g7ygbc.cloudfront.net/maintwitt_yellow.mp4" type="video/mp4" />
      </video>
      <div className="lyquid_title">
        Lyquid <span className="lyquid_abv">5% ABV</span>
      </div>
      <div className="lyquid_desc">
        Lyquid’s cells developed on the far left stream of the Herong River where it was abundant with fluorite and
        Fe+3. Such density formed the citrus skin color and their active personality. With much curiosity and eagerness
        to challenge, they are now scattered all over the continent, but their ancestors started their livelihood in a
        tropical climate. Those who define their lives as ‘travelers’ rather than ‘who wander’ enjoy exploring the new
        culture and expressing their experiences. With these characteristics, they are leading the new trend of
        Beergang. The items that they wore formed followers and continued to sell out.
      </div>
    </Container>
  )
}

export default Lyquid
