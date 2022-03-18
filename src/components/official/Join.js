import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 128px;

  @media (max-width: 767px) {
    margin-top: 131px;
  }

  .back {
    width: 100%;
    height: 476px;
    background-color: #ff6700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/config/images/official/img_comm_bg.png');
    background-size: cover;

    @media (max-width: 767px) {
      height: 274px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .box {
      display: flex;
      max-width: 1200px;
      width: 100%;
      align-items: center;

      @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        max-width: unset;
      }

      .beer_img {
        width: 530px;
        height: 424px;
        margin-right: 82px;

        @media (max-width: 767px) {
          width: 246px;
          height: 197px;
          margin-top: -105px;
          margin-right: 0;
        }
      }

      .comment {
        font-family: 'Komika Axis';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 77px;
        color: #000000;
        margin-bottom: 42px;

        @media (max-width: 767px) {
          font-size: 28px;
          line-height: 43px;
          text-align: center;
          margin-bottom: 16px;
        }
      }

      .icon_box {
        display: flex;

        @media (max-width: 767px) {
          justify-content: center;
        }

        .icon {
          width: 68px;
          height: 68px;
          margin-right: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background-color: #000000;
          cursor: pointer;

          @media (max-width: 767px) {
            width: 44px;
            height: 44px;
            margin-right: 12px;
            margin-bottom: 36px;
          }

          :hover {
            background-color: #ff6700;
          }

          .icon_img {
            width: 30px;
            height: 30px;

            @media (max-width: 767px) {
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }

  .cheers_text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 74px;
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #ff6700;
    margin-bottom: 128px;

    @media (max-width: 767px) {
      height: 52px;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 26px;
    }
  }
`

const Join = () => {
  return (
    <Container>
      <div className="back">
        <div className="box">
          <img className="beer_img" src="/config/images/official/img_comm_cheers.png" />
          <div>
            <div className="comment">Are your ready to join our Gang?</div>
            <div className="icon_box">
              <div className="icon">
                <img className="icon_img" src="/config/images/official/icon_twitter.png" />
              </div>
              <div className="icon">
                <img className="icon_img" src="/config/images/official/icon_discord.png" />
              </div>
              <div className="icon">
                <img className="icon_img" src="/config/images/official/icon_instagram.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cheers_text">Cheers to Beergang</div>
    </Container>
  )
}

export default Join
