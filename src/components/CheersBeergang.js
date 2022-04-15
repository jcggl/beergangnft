import React from 'react'
import styled from 'styled-components'
import { RenderIfElse } from './RenderIf'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 103px;
  padding: 0 40px;
  color: #ffffff;
  font-family: Anton;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 108px;
  font-feature-settings: 'pnum' on, 'lnum' on;

  @media (max-width: 767px) {
    max-width: unset;
    margin-top: 24px;
    padding: 0 20px;
    font-size: 32px;
    line-height: 46px;
  }

  .text {
    text-align: center;

    .cheers {
      color: #ff6700;
    }
  }

  .bottle_cap {
    display: flex;
    //position: absolute;
    margin-top: -40px;
    //bottom: 0;
    @media (max-width: 767px) {
      margin-top: -15px;
      //bottom: 0;
    }

    .bottle_cap_img {
      width: 140px;
      height: 123px;
      @media (max-width: 767px) {
        width: 114px;
        height: 116px;
      }
    }
  }
`

const CheersBeergang = () => {
  const windowSize = window.matchMedia('screen and (max-width: 767px)')

  return (
    <Container>
      <RenderIfElse renderFirst={windowSize.matches}>
        <span className="text">
          Beergang is the
          <br />
          <span className="cheers">
            world's first emotionally
            <br /> interactive full-body 3D
          </span>
          <br />
          NFT avatar
        </span>
        <span className="text">
          Beergang is the&nbsp;<span className="cheers">world's first emotionally interactive full-body 3D</span>
          &nbsp;NFT avatar
        </span>
      </RenderIfElse>
      <div className="bottle_cap">
        <img className="bottle_cap_img" src="/config/images/img_bottle_cap.png" />
      </div>
    </Container>
  )
}

export default CheersBeergang
