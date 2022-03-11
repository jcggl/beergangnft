import React, { useState } from 'react'
import styled from 'styled-components'
import { DetailOne, DetailTwo, DetailThree } from './about'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1194px;
  align-items: center;
  background: #000000;
  font-style: normal;
  font-weight: normal;
  //margin-top: -201px;

  //.img_box {
  //  display: flex;
  //}
  //
  //.up_img {
  //  margin-top: 0;
  //}
  //
  //.down_img {
  //  margin-top: 127px;
  //  margin-left: -7px;
  //  margin-right: 14px;
  //  :last-child {
  //    margin-right: 0;
  //  }
  //}

  .desc_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    //margin-top: -35px;
    margin-top: -201px;
    padding: 0 20px;

    @media (max-width: 360px) {
      margin-top: -290px;
    }

    .about {
      font-family: Anton;
      font-style: normal;
      font-weight: normal;
      font-size: 120px;
      line-height: 120px;
      color: #ffffff;

      @media (max-width: 767px) {
        max-width: 668px;
        margin-top: 97px;
        font-size: 80px;
        line-height: 100px;
      }
      @media (max-width: 360px) {
        margin-top: 61px;
        font-size: 48px;
        line-height: 56px;
      }
    }

    .desc {
      margin-top: 40px;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 40px;
      color: #fafafa;

      @media (max-width: 360px) {
        margin-top: 16px;
        font-size: 12px;
        line-height: 20px;
      }
    }

    .details {
      display: flex;
      margin-top: 136px;
      padding: 40px 0;

      .numbers {
        display: flex;
        flex-flow: column nowrap;
        font-family: Poppins;
        color: #ff6700;
        font-size: 86px;
        line-height: 90px;
        font-weight: 300;
        font-style: italic;

        span {
          width: 180px;

          &:nth-child(2),
          &:nth-child(3) {
            margin-top: 30px;
          }

          &.selected {
            font-weight: 900;
            text-decoration: line-through;
            text-decoration-thickness: 3px;
          }
        }
      }

      .detail_card {
        display: flex;
        flex-flow: column;
        margin-left: 24px;
        width: 100%;
        font-family: Poppins;

        .title {
          color: #fafafa;
          font-size: 58px;
          line-height: 87px;
          font-weight: 700;
        }

        .sub {
          margin-top: 10px;
          color: #a1a1aa;
          font-size: 20px;
          line-height: 40px;
        }
      }
    }
  }
`

const About = () => {
  const [selectedNum, setSelectedNum] = useState(1)
  const onClickNumber = (num) => {
    setSelectedNum(num)
  }
  const details = [
    { number: '01', comp: <DetailOne /> },
    { number: '02', comp: <DetailTwo /> },
    { number: '03', comp: <DetailThree /> },
  ]
  return (
    <Container>
      {/*<div className="img_box">*/}
      {/*  <div className="up_img">*/}
      {/*    <img src="/config/images/official/img_avatar_lyquid.png" />*/}
      {/*  </div>*/}
      {/*  <div className="down_img">*/}
      {/*    <img src="/config/images/official/img_avatar_lyquid2.png" />*/}
      {/*  </div>*/}
      {/*  <div className="up_img">*/}
      {/*    <img src="/config/images/official/img_avatar_lyquid3.png" />*/}
      {/*  </div>*/}
      {/*  <div className="down_img">*/}
      {/*    <img src="/config/images/official/img_avatar_lyquid4.png" />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="desc_box">
        <div className="about">Cheers to Beergang</div>
        <div className="desc">
          Beergang is a collection of 10,000 avatars built on the Homebrew Algorithm created by GoodGang Labs and stored
          on the Ethereum blockchain network and IPFS. Beergang mirrors your emotion to express your feelings in our
          GoodGang universe.{' '}
        </div>
        <div className="details">
          <div className="numbers">
            {details.map((detail, idx) => (
              <span className={selectedNum === idx + 1 && 'selected'} onClick={() => onClickNumber(idx + 1)}>
                {detail.number}
                {selectedNum === idx + 1 && <em>&nbsp;&nbsp;</em>}
              </span>
            ))}
          </div>
          <div className="detail_card">{details[selectedNum - 1].comp}</div>
        </div>
      </div>
    </Container>
  )
}

export default About
