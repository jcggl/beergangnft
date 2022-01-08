import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 951px;
  background-image: url('/config/images/main_back.png');
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
    max-width: 1001px;
    height: 563px;
  }

  .comming_soon {
    width: 100%;
    max-width: 792px;

    @media (max-width: 767px) {
      max-width: unset;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`

const CommingSoonGif = styled.img`
  width: 792px;
  height: 300px;
`

const CommingSoon = () => {
  return (
    <Container>
      <img className="comming_soon" src='/config/images/text_01_speed.gif' />
    </Container>
  )
}

export default CommingSoon