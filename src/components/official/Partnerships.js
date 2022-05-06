import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #ffffff;
  max-width: 1200px;
  padding: 0 50px;

  @media (max-width: 992px) {
    padding: 0 50px;
  }

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
  }

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 84px;
    margin-bottom: 12px;

    @media (max-width: 992px) {
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 10px;
    }

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 8px;
    }
  }

  .desc {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    color: #e4e4e7;
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 49px;

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 32px;
      margin-bottom: 30px;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }

  .box {
    max-width: 1200px;
    width: 100%;
    height: 409px;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
      height: unset;
      padding: 14px;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      height: unset;
      max-width: unset;
      padding: 16px;
    }

    .partner_item {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Anton';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 48px;
      text-align: center;
      color: #ffffff;

      @media (max-width: 992px) {
        width: unset;
        font-size: 20px;
        line-height: 24px;
      }

      @media (max-width: 767px) {
        width: unset;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 22px;
        :last-child {
          margin-bottom: 0;
        }
      }

      img {
        //height: 288px;
        max-width: 384px;
        width: 30vw;
        height: auto;
        margin-bottom: 25px;

        @media (max-width: 992px) {
          width: 100%;
          height: unset;
          margin-bottom: 12px;
        }

        @media (max-width: 767px) {
          width: 100%;
          height: unset;
          margin-bottom: 12px;
        }
      }
    }
  }

  .please_email {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: #e4e4e7;
    margin-top: 46px;
    margin-bottom: 122px;

    @media (max-width: 992px) {
      margin-top: 10px;
      margin-bottom: 66px;
      font-size: 16px;
      line-height: 32px;
    }

    @media (max-width: 767px) {
      margin-top: 16px;
      margin-bottom: 38px;
      font-size: 14px;
      line-height: 24px;
    }

    a {
      font-weight: 700;
      color: #ff6700;
      text-decoration: none;
    }
  }
`

const Partnerships = ({ communityRef }) => {
  return (
    <Container ref={communityRef}>
      <div className="title">Partnerships</div>
      <div className="desc">We are partnership gangs. We’re looking for partners for the following areas:</div>
      <div className="box">
        <div className="partner_item">
          <img src="/config/images/official/partnerships/img_avatar_lyquid@3x.png" />
          <div>NFT avatar projects</div>
        </div>
        <div className="partner_item">
          <img src="/config/images/official/partnerships/img_beer_brand@3x.png" />
          <div>Beer brand</div>
        </div>
        <div className="partner_item">
          <img src="/config/images/official/partnerships/img_fashion_brand@3x.png" />
          <div>Fashion brand</div>
        </div>
      </div>
      <div className="please_email">
        Please shoot us an email to <a href="mailto:partnerships@goodganglabs.com">partnerships@goodganglabs.com</a> if
        you’re interested in working with GoodGangs.
      </div>
    </Container>
  )
}

export default Partnerships
