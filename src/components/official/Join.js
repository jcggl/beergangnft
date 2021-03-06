import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 128px;

  @media (max-width: 992px) {
    margin-top: 42px;
  }

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

    @media (max-width: 992px) {
      height: 274px;
      padding: 0 20px;
    }

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

      @media (max-width: 992px) {
        max-width: unset;
        padding: 0 10px 0 30px;
      }

      @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        max-width: unset;
        padding: 0;
      }

      .beer_img {
        width: 530px;
        height: 424px;
        margin-right: 82px;

        @media (max-width: 992px) {
          width: 275px;
          height: 220px;
          margin-right: 45px;
        }

        @media (max-width: 767px) {
          width: 246px;
          height: 197px;
          margin-top: -105px;
          margin-right: 0;
        }
      }

      .comment {
        width: unset;
        font-family: 'Komika Axis';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 77px;
        color: #000000;
        margin-bottom: 42px;

        @media (max-width: 992px) {
          width: 350px;
          font-size: 28px;
          line-height: 44px;
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          width: unset;
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

          @media (max-width: 992px) {
            width: 42px;
            height: 42px;
          }

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

  .cheers_container {
    margin-top: 10px;
    margin-bottom: 128px;
    @media (max-width: 767px) {
      margin-bottom: 26px;
    }
    .cheers {
      width: 302px;

      @media (max-width: 992px) {
        width: 140px;
      }
    }
  }
`

const Join = () => {
  const MarqueeItem = () => {
    let itemArr = []
    let cheersImgSize
    if (window.innerWidth > 992) {
      cheersImgSize = 300
    } else {
      cheersImgSize = 140
    }
    for (let i = 0; i < window.innerWidth / cheersImgSize + 1; i++) {
      itemArr.push(
        <img
          src="/config/images/official/cheers_to_beergang.png"
          className="cheers"
          key={`cheers_${i + 1}`}
          alt={`cheers${i + 1}`}
        />,
      )
    }
    return itemArr
  }
  return (
    <Container>
      <div className="back">
        <div className="box">
          <img className="beer_img" src="/config/images/official/img_comm_cheers.png" />
          <div>
            <div className="comment">Are your ready to join our Gang?</div>
            <div className="icon_box">
              <a className="icon" href="https://twitter.com/beergang_nft" target="_blank">
                <img className="icon_img" src="/config/images/official/icon_twitter.png" />
              </a>
              <a className="icon" href="https://discord.com/invite/D6JvCspJ7F" target="_blank">
                <img className="icon_img" src="/config/images/official/icon_discord.png" />
              </a>
              <a className="icon" href="https://www.instagram.com/beergang_nft/" target="_blank">
                <img className="icon_img" src="/config/images/official/icon_instagram.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cheers_container">
        <Marquee gradient={false} speed={100}>
          <MarqueeItem />
        </Marquee>
      </div>
    </Container>
  )
}

export default Join
