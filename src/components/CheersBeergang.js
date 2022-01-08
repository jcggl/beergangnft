import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 333px;
  color: #FFFFFF;
  font-family: Anton;
  font-style: normal;
  font-weight: normal;
  font-size: 90px;
  line-height: 135px;
  font-feature-settings: 'pnum' on, 'lnum' on;

  @media (max-width: 767px) {
    max-width: unset;
    height: 275px;
    font-size: 48px;
    line-height: 58px;
  }

  .text {
    text-align: center
  }

  .cheers {
    color: #FF6700;
  }

  .bottle_cap {
    display: flex;
    position: absolute;
    left: 954px;
    top: 170px;
    @media (max-width: 767px) {
      left: unset;
      right: 40px;
      top: 175px;
    }
  }

  .bottle_cap_img {
    width: 199px;
    height: 199px;
    @media (max-width: 767px) {
      width: 114px;
      height: 117px;
    }
  }
`

const CheersBeergang = () => {
  return (
    <Container>
      <span className="text">Say&nbsp;<span className="cheers">Cheers</span>&nbsp;to BEERGANG</span>
      <div className="bottle_cap">
        <img className="bottle_cap_img" src='/config/images/img_bottle_cap.png' />
      </div>
    </Container>
  )
}

export default CheersBeergang
