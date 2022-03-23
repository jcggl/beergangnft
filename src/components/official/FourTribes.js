import React from 'react'
import styled from 'styled-components'
import { Lyquid, CloudX, Staut, RedPool } from './tribes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #ffffff;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .title {
    width: 100%;
    margin-top: 104px;
    font-family: 'Komika Axis';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 83px;
    letter-spacing: 0.03em;

    @media (max-width: 767px) {
      margin-top: 32px;
      font-size: 24px;
      line-height: 40px;
    }
  }

  .desc {
    margin-top: 31px;
    margin-bottom: 60px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: #e4e4e7;

    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 18px;
    }
  }

  .tribes {
    width: 100%;
    height: 2516px;
    display: flex;
    margin-bottom: 103px;

    @media (max-width: 767px) {
      height: unset;
      overflow-x: auto;
      margin-bottom: 112px;
    }

    .lyquid_wrapper {
      position: absolute;

      @media (max-width: 767px) {
        position: relative;
      }
    }

    .staut_wrapper {
      position: absolute;
      margin-left: 612px;
      margin-top: 194px;

      @media (max-width: 767px) {
        position: relative;
        margin-left: 16px;
        margin-top: 50px;
      }
    }

    .cloudx_wrapper {
      position: absolute;
      margin-top: 1106px;

      @media (max-width: 767px) {
        position: relative;
        margin-left: 16px;
        margin-top: 0;
      }
    }

    .redpool_wrapper {
      position: absolute;
      margin-left: 612px;
      margin-top: 1340px;

      @media (max-width: 767px) {
        position: relative;
        margin-left: 16px;
        margin-top: 50px;
      }
    }
  }
`

const FourTribes = () => {
  return (
    <Container>
      <div className="title">THE FOUR TRIBES</div>
      <div className="desc">
        Each species developed unique characteristics depending on the amount of mineral that they were exposed to. Each
        stream had distinct properties due to its speed of flow, the abundance of minerals, and the size of the plains.
      </div>
      <div className="tribes">
        <div className="lyquid_wrapper">
          <Lyquid />
        </div>
        <div className="staut_wrapper">
          <Staut />
        </div>
        <div className="cloudx_wrapper">
          <CloudX />
        </div>
        <div className="redpool_wrapper">
          <RedPool />
        </div>
      </div>
    </Container>
  )
}

export default FourTribes
