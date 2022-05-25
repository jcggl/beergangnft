import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;

  @media (max-width: 767px) {
    width: 264px;
  }

  .true_title {
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

  .true_box {
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

    .true_subject {
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

    .true_desc {
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

    .true_in_progress img {
      width: 178px;
      height: 46px;
      margin-bottom: 60px;

      @media (max-width: 992px) {
        width: 136px;
        height: 35px;
        margin-bottom: 40px;
      }

      @media (max-width: 767px) {
        width: 120px;
        height: 30px;
        margin-bottom: 30px;
      }
    }

    .true_to_be_continued img {
      width: 194px;
      height: 46px;

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

const TrueIdentity = () => {
  return (
    <Container>
      <div className="true_title">True Identity</div>
      <div className="true_box">
        <div className="true_subject">Beergang</div>
        <div className="true_desc gray_color">
          Beergang is the world’s first emotionally interactive full-body 3D NFT avatar. Beergang will be your identity
          both in the digital and physical worlds. We want to help you represent your true-self with your avatar which
          can mirror your emotion to express your feelings.
        </div>
        <div className="true_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>

        <div className="true_subject">GangAI</div>
        <div className="true_desc gray_color">
          we have our own AI technique where Beergang will recognize your emotional status from your speech. It will
          show a face and body gesture based on your emotional status.
        </div>
        <div className="true_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>
      </div>
    </Container>
  )
}

export default TrueIdentity
