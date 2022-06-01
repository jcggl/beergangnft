import React, { useState } from 'react'
import styled from 'styled-components'
import { DetailOne, DetailTwo, DetailThree } from './details'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: #000000;
  font-style: normal;
  font-weight: normal;

  .desc_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin-top: -290px;
    padding: 122px 50px;
    @media (max-width: 992px) {
      margin-top: -260px;
      padding: 66px 50px;
    }
    @media (max-width: 767px) {
      margin-top: -265px;
      padding: 38px 20px 0;
    }

    .about {
      font-family: Anton;
      font-style: normal;
      font-weight: normal;
      font-size: 120px;
      line-height: 120px;
      color: #ffffff;
      @media (max-width: 992px) {
        font-size: 80px;
        line-height: 100px;
      }
      @media (max-width: 767px) {
        max-width: 668px;
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
      @media (max-width: 992px) {
        margin-top: 20px;
        font-size: 16px;
        line-height: 32px;
      }
      @media (max-width: 767px) {
        max-width: 668px;
        margin-top: 16px;
        font-size: 12px;
        line-height: 20px;
      }
    }

    .details {
      display: flex;
      box-sizing: content-box;
      min-height: 705px;
      margin-top: 136px;
      padding: 40px 0;
      @media (max-width: 992px) {
        flex-direction: column;
        min-height: 642px;
        margin-top: 40px;
        padding: 20px 0;
      }
      @media (max-width: 767px) {
        flex-direction: column;
        min-height: 561px;
        margin-top: 38px;
        padding: 26px 0;
      }

      .numbers {
        display: flex;
        flex-flow: column nowrap;
        font-family: Poppins;
        color: #ff6700;
        font-size: 86px;
        line-height: 90px;
        font-weight: 300;
        @media (max-width: 992px) {
          flex-direction: row;
          font-size: 56px;
          line-height: 64px;
        }
        @media (max-width: 767px) {
          flex-direction: row;
          font-size: 38px;
          line-height: 44px;
        }

        span {
          width: 180px;
          @media (max-width: 992px) {
            width: 86px;
          }
          @media (max-width: 767px) {
            width: 50px;
          }

          &:nth-child(2),
          &:nth-child(3) {
            margin-top: 30px;
            @media (max-width: 992px) {
              margin-top: 0;
              margin-left: 12px;
            }
            @media (max-width: 767px) {
              margin-top: 0;
              margin-left: 18px;
            }
          }

          &.selected {
            font-weight: 900;
            text-decoration: line-through;
            text-decoration-thickness: 3px;
            font-style: italic;
          }
        }
      }

      .detail_card {
        display: flex;
        flex-flow: column;
        margin-left: 24px;
        width: 100%;
        font-family: Poppins;
        @media (max-width: 992px) {
          margin-left: 0;
        }
        @media (max-width: 767px) {
          margin-left: 0;
        }

        .title {
          color: #fafafa;
          font-size: 58px;
          line-height: 87px;
          font-weight: 700;
          @media (max-width: 992px) {
            margin-top: 24px;
            font-size: 38px;
            line-height: 48px;
          }
          @media (max-width: 767px) {
            margin-top: 16px;
            font-size: 24px;
            line-height: 36px;
          }
        }

        .sub {
          margin-top: 10px;
          color: #a1a1aa;
          font-size: 20px;
          line-height: 40px;
          @media (max-width: 992px) {
            margin-top: 12px;
            font-size: 16px;
            line-height: 32px;
          }
          @media (max-width: 767px) {
            margin-top: 6px;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
    }
  }
`

const About = ({ aboutRef }) => {
  const [selectedNum, setSelectedNum] = useState(0)
  const onClickNumber = (num) => {
    setSelectedNum(num)
  }
  const details = [
    { number: '01', comp: <DetailOne /> },
    { number: '02', comp: <DetailTwo /> },
    { number: '03', comp: <DetailThree /> },
  ]
  const Numbers = () =>
    details.map((detail, idx) => (
      <span
        key={`about${idx + 1}`}
        className={selectedNum === idx ? 'selected' : undefined}
        onClick={() => onClickNumber(idx)}>
        {detail.number}
        {selectedNum === idx && <em>&nbsp;&nbsp;</em>}
      </span>
    ))

  return (
    <Container>
      <div className="desc_box" ref={aboutRef}>
        <div className="about">Cheers to Beergang</div>
        <div className="desc">
          Beergang is a collection of 10,000 avatars built on the Homebrew Algorithm created by GoodGang Labs and stored
          on the Ethereum blockchain network and IPFS. Beergang mirrors your emotion to express your feelings in our
          GoodGang universe.{' '}
        </div>
        <div className="details">
          <div className="numbers">
            <Numbers />
          </div>
          <div className="detail_card">{details[selectedNum].comp}</div>
        </div>
      </div>
    </Container>
  )
}

export default About
