import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  padding: 0 40px 120px 40px;

  @media (max-width: 992px) {
    padding: 0 50px 66px 50px;
  }
  @media (max-width: 767px) {
    padding: 38px 20px;
  }

  .video-tag {
    display: block;

    @media (max-width: 992px) {
      display: block;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .video-tag_mobile {
    display: none;

    @media (max-width: 992px) {
      display: none;
    }
    @media (max-width: 767px) {
      display: block;
      max-height: 90vh;
    }
  }
`

const Universe = () => {
  return (
    <Container>
      <video preload="true" autoPlay playsInline loop muted={true} className="video-tag">
        <source src="https://d3n7wfb7g7ygbc.cloudfront.net/v0426_Univ_horizontal.mp4" type="video/mp4" />
      </video>
      <video preload="true" autoPlay playsInline loop muted={true} className="video-tag_mobile">
        <source src="https://d3n7wfb7g7ygbc.cloudfront.net/v0426_Univ_vertical.mp4" type="video/mp4" />
      </video>
      {/*<img src="/config/images/official/beergang_universe.png" alt={'beergang_universe'} />*/}
    </Container>
  )
}

export default Universe
