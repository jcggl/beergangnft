import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1960px;
  height: 1080px;
  color: #ffffff;
  font-family: Anton;
  font-style: normal;
  font-weight: normal;
  font-size: 95px;
  line-height: 102px;

  @media (max-width: 767px) {
    height: 100%;
    font-size: 55px;
    line-height: 60px;
  }

  .beergang {
    margin-top: 402px;
    margin-left: 120px;
    z-index: 1;

    @media (max-width: 767px) {
      margin-top: 362px;
      margin-left: 20px;
    }
  }

  .presale {
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    color: #000000;
    margin-left: 120px;
    z-index: 1;

    @media (max-width: 767px) {
      margin-left: 20px;
    }
  }

  .march_2022 {
    margin-left: 120px;
    z-index: 1;

    .gradient {
      background: linear-gradient(to right, #ff7d00, #f54303);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 767px) {
      margin-left: 20px;
    }
  }

  .wallet {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    margin-left: 120px;
    margin-bottom: 32px;
    width: 292px;
    height: 84px;
    border: 1px solid;
    border-image: linear-gradient(to bottom, #ff7d00, #f54303);
    border-image-slice: 1;
    background: rgba(0, 0, 0, 0.6);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ff6700;
    z-index: 1;

    @media (max-width: 767px) {
      margin-top: 18px;
      margin-left: 20px;
      margin-bottom: 32px;
      width: 174px;
      height: 40px;
      font-size: 14px;
      line-height: 18px;
    }

    .wallet_icon {
      margin-left: 18px;
      width: 36px;
      height: 36px;

      @media (max-width: 767px) {
        margin-left: 8px;
        width: 24px;
        height: 24px;
      }
    }
  }

  .video-box {
    text-align: center;
    z-index: 0;
  }

  .video-tag {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
    height: 100%;
    width: auto;
    margin: 0 auto;
  }

  .links {
    position: absolute;
    display: flex;
    justify-content: right;
    width: 100%;
    padding-top: 136px;
    padding-right: 120px;
    z-index: 5;

    @media (max-width: 767px) {
      padding-top: 151px;
      padding-left: 20px;
      justify-content: left;
    }

    .box {
      display: flex;
      flex-direction: column;

      .icon {
        width: 54px;
        height: 54px;
        margin-bottom: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        background-color: #000000;
        cursor: pointer;

        :hover {
          background-color: #ff6700;
        }

        @media (max-width: 767px) {
          width: 32px;
          height: 32px;
          margin-bottom: 8px;
        }

        .icon_img {
          width: 40px;
          height: 40px;

          @media (max-width: 767px) {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
`

const Promotion = () => {
  return (
    <Container>
      <div className="video-box">
        <video preload autoPlay loop muted className="video-tag">
          <source src="https://jcggl.github.io/publicDrive/teaser.webm" type="video/webm" />
        </video>
      </div>
      <div className="links">
        <div className="box">
          <div className="icon">
            <img className="icon_img" src="/config/images/official/icon_opensea.png" />
          </div>
          <div className="icon">
            <img className="icon_img" src="/config/images/official/icon_twitter.png" />
          </div>
          <div className="icon">
            <img className="icon_img" src="/config/images/official/icon_discord.png" />
          </div>
          <div className="icon">
            <img className="icon_img" src="/config/images/official/icon_instagram.png" />
          </div>
          <div className="icon">
            <img className="icon_img" src="/config/images/official/icon_video.png" />
          </div>
        </div>
      </div>
      <div className="beergang">BEERGANG</div>
      <div className="presale">PRE-SALE</div>
      <div className="march_2022">
        <span className="gradient">MARCH 2022</span>
      </div>
      <div className="wallet">
        Connect Wallet
        <img className="wallet_icon" src="/config/images/official/icon_wallet.png" />
      </div>
    </Container>
  )
}

export default Promotion
