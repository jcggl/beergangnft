import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;

  @media (max-width: 767px) {
    width: 264px;
  }

  .physical_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 66px;
    color: #ff6700;
    margin-left: 30px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    z-index: 1;

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 40px;
      margin-left: 10px;
    }
  }

  .physical_box {
    background-color: #101010;
    width: 100%;
    border: 1px solid;
    border-image: linear-gradient(to bottom, #ff6700aa, #ff670000);
    border-image-slice: 1;
    margin-top: -34px;
    padding: 70px 32px 73px 32px;

    @media (max-width: 767px) {
      margin-top: -20px;
      padding: 32px 16px;
    }

    .physical_subject {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 10px;

      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 4px;
      }
    }

    .physical_desc {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 21px;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }

    .physical_in_progress img {
      width: 178px;
      height: 46px;
      margin-bottom: 60px;

      @media (max-width: 767px) {
        width: 100px;
        height: 30px;
        margin-bottom: 30px;
      }
    }

    .physical_to_be_continued img {
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

const PhysicalWorld = () => {
  return (
    <Container>
      <div className="physical_title">Physical World</div>
      <div className="physical_box">
        <div className="physical_subject">ARGang</div>
        <div className="physical_desc gray_color">
          an Augmented Reality camera to help people express their true identities with Beergang avatars and share
          special moments with the world. It will be open to other NFT avatar communities. Shoot us an email if you’re
          interested in partnering with us!
        </div>
        <div className="physical_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>

        <div className="physical_subject">GoodGang Merch shop</div>
        <div className="physical_desc gray_color">Shop high quality Beergang-inspired gifts and merchandises.</div>
        <div className="physical_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>

        <div className="physical_subject gray_color">Events</div>
        <div className="physical_desc gray_color">
          invite the NFT gated meet-ups, festival, and more for the Beergang holders.
        </div>
        <div className="physical_to_be_continued">
          <img src="/config/images/official/roadmap_continued.png" />
        </div>
      </div>
    </Container>
  )
}

export default PhysicalWorld
