import React, { useState } from 'react'
import styled from 'styled-components'
import { DetailOne, DetailTwo, DetailThree } from './about'

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
    max-width: 1200px;
    margin-top: -290px;
    padding: 122px 20px;
    @media (max-width: 768px) {
      margin-top: -260px;
      padding: 66px 50px;
    }
    @media (max-width: 360px) {
      margin-top: -265px;
      //padding-top: 38px;
      //padding-bottom: 0;
      padding: 38px 20px 0;
    }

    .about {
      font-family: Anton;
      font-style: normal;
      font-weight: normal;
      font-size: 120px;
      line-height: 120px;
      color: #ffffff;
      @media (max-width: 768px) {
        max-width: 668px;
        font-size: 80px;
        line-height: 100px;
      }
      @media (max-width: 360px) {
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
      @media (max-width: 768px) {
        max-width: 668px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 32px;
      }
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
      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 40px;
        padding: 20px 0;
      }
      @media (max-width: 360px) {
        flex-direction: column;
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
        font-style: italic;
        @media (max-width: 768px) {
          flex-direction: row;
          font-size: 56px;
          line-height: 64px;
        }
        @media (max-width: 360px) {
          flex-direction: row;
          font-size: 38px;
          line-height: 44px;
        }

        span {
          width: 180px;
          @media (max-width: 768px) {
            width: 86px;
          }
          @media (max-width: 360px) {
            width: 50px;
          }

          &:nth-child(2),
          &:nth-child(3) {
            margin-top: 30px;
            @media (max-width: 768px) {
              margin-top: 0;
              margin-left: 12px;
            }
            @media (max-width: 360px) {
              margin-top: 0;
              margin-left: 18px;
            }
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
        @media (max-width: 768px) {
          margin-left: 0;
        }
        @media (max-width: 360px) {
          margin-left: 0;
        }

        .title {
          color: #fafafa;
          font-size: 58px;
          line-height: 87px;
          font-weight: 700;
          @media (max-width: 768px) {
            margin-top: 24px;
            font-size: 38px;
            line-height: 48px;
          }
          @media (max-width: 360px) {
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
          @media (max-width: 768px) {
            margin-top: 12px;
            font-size: 16px;
            line-height: 32px;
          }
          @media (max-width: 360px) {
            margin-top: 6px;
            font-size: 12px;
            line-height: 20px;
          }
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
