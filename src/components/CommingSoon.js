import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 767px) {
    height: 100vh;
  }

  .video-box {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;
    overflow: hidden;

    .video-tag {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      display: block;
      height: 100%;
      width: auto;
      margin: 0 auto;
    }
  }
`

const CommingSoon = () => {
  return (
    <Container>
      <div className="video-box">
        <video preload="true" autoPlay loop muted playsInline className="video-tag">
          <source src="https://jcggl.github.io/publicDrive/teaser_brewing_video.mp4" type="video/mp4" />
        </video>
      </div>
    </Container>
  )
}

export default CommingSoon
