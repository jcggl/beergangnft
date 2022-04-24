import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  margin-top: 52px;

  @media (max-width: 767px) {
    width: 264px;
    margin-top: 40px;
  }

  .community_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 66px;
    color: #ff6700;
    margin-left: 30px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    z-index: 1;

    @media (max-width: 992px) {
      font-size: 40px;
      line-height: 50px;
      margin-left: 24px;
    }

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 40px;
      margin-left: 10px;
    }
  }

  .community_box {
    background-color: #101010;
    width: 100%;
    border: 1px solid;
    border-image: linear-gradient(to bottom, #ff6700aa, #ff670000);
    border-image-slice: 1;
    margin-top: -34px;
    padding: 70px 32px 73px 32px;

    @media (max-width: 992px) {
      margin-top: -25px;
      padding: 50px 24px;
    }

    @media (max-width: 767px) {
      margin-top: -20px;
      padding: 32px 16px;
    }

    .community_subject {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 10px;

      @media (max-width: 992px) {
        font-size: 20px;
        line-height: 28px;
      }

      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 4px;
      }
    }

    .community_desc {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 21px;

      @media (max-width: 992px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 20px;
      }

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }

    .community_to_be_continued img {
      width: 194px;
      height: 46px;

      @media (max-width: 992px) {
        width: 148px;
        height: 35px;
        margin-bottom: 40px;
      }

      @media (max-width: 767px) {
        width: 121px;
        height: 30px;
      }
    }

    .gray_color {
      color: #71717a;
    }
  }
`

const Community = () => {
  return (
    <Container>
      <div className="community_title">
        Web 3.0
        <br />
        Community
      </div>
      <div className="community_box">
        <div className="community_subject gray_color">$beer</div>
        <div className="community_desc gray_color">
          a native currency that can be used in GangHouse, offering the Beergang holders both Governance and Utility
          values. We may begin testing it without any tradeability first.
        </div>
        <div className="community_to_be_continued">
          <img src="/config/images/official/roadmap_continued.png" />
        </div>

        <div className="community_subject gray_color">DAO</div>
        <div className="community_desc gray_color">
          we believe that DAO is an ideal governance structure in the future. We may do various small experiments to
          find the best fit for us.
        </div>
        <div className="community_to_be_continued">
          <img src="/config/images/official/roadmap_continued.png" />
        </div>
      </div>
    </Container>
  )
}

export default Community
