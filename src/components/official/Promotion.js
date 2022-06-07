import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //max-width: 1960px;
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

  .video-box {
    text-align: center;
    z-index: 0;

    .video-tag {
      position: fixed;
      top: 50%;
      left: 50%;
      //margin-right: -50%;
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      display: block;
      //height: 100%;
      width: auto;
      margin: 0 auto;
      height: 100vh;

      @media (max-width: 767px) {
        display: ${(props) => (props.mainVisible ? 'block' : 'none')};
      }
    }
  }

  .beergang {
    margin-top: 402px;
    margin-left: 120px;
    z-index: 1;

    @media (max-width: 992px) {
      margin-top: 660px;
      margin-left: 50px;
    }

    @media (max-width: 767px) {
      margin-top: 362px;
      margin-left: 20px;
    }
  }

  .presale {
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    color: #000000;
    margin-top: 12px;
    margin-left: 120px;
    z-index: 1;

    @media (max-width: 992px) {
      margin-left: 50px;
    }

    @media (max-width: 767px) {
      margin-left: 20px;
    }
  }

  .march_2022 {
    margin-top: 12px;
    margin-left: 120px;
    z-index: 1;

    .gradient {
      background: linear-gradient(to right, #ff7d00, #f54303);
      box-shadow: -12px 0px 9px 0px #5531311f;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 992px) {
      margin-left: 50px;
    }

    @media (max-width: 767px) {
      margin-left: 20px;
      margin-bottom: 40px;
    }
  }

  .wallet {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    margin-left: 120px;
    //margin-bottom: 32px;
    width: 420px;
    height: 84px;
    //border: 1px solid;
    background: linear-gradient(182.44deg, #ff6d1b 5.6%, #ff4b32 88.91%);
    backdrop-filter: blur(10px);
    //border-image: linear-gradient(to bottom, #ff7d00, #f54303);
    //border-image-slice: 1;
    //background: rgba(0, 0, 0, 0.6);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    z-index: 1;

    @media (max-width: 992px) {
      display: none;
    }

    @media (max-width: 767px) {
      display: none;
      //margin-top: 18px;
      //margin-left: 20px;
      //margin-bottom: 32px;
      //width: 174px;
      //height: 40px;
      //font-size: 14px;
      //line-height: 18px;
      //font-weight: 600;
    }

    .wallet_icon {
      margin-left: 20px;
      width: 46px;
      height: 36px;

      @media (max-width: 767px) {
        margin-left: 8px;
        width: 24px;
        height: 24px;
      }
    }
  }

  .links {
    position: absolute;
    display: flex;
    justify-content: right;
    width: 100%;
    padding-top: 136px;
    padding-right: 120px;
    z-index: 5;

    @media (max-width: 992px) {
      padding-top: 100px;
      padding-right: 50px;
    }

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

const Promotion = ({ mainVisible }) => {
  return (
    <Container mainVisible={mainVisible}>
      <div className="video-box">
        <video
          preload="true"
          autoPlay
          playsInline
          loop
          muted
          // poster="/config/images/official/logo_animation.gif"
          className="video-tag">
          <source src="https://d3n7wfb7g7ygbc.cloudfront.net/homepage_main.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="links">
        <div className="box">
          <a className="icon" href="https://testnets.opensea.io/collection/gglbeer-v4" target="_blank">
            <img className="icon_img" src="/config/images/official/icon_opensea.png" />
          </a>
          <a className="icon" href="https://twitter.com/beergang_nft" target="_blank">
            <img className="icon_img" src="/config/images/official/icon_twitter.png" />
          </a>
          <a className="icon" href="https://discord.com/invite/D6JvCspJ7F" target="_blank">
            <img className="icon_img" src="/config/images/official/icon_discord.png" />
          </a>
          <a className="icon" href="https://www.instagram.com/beergang_nft/" target="_blank">
            <img className="icon_img" src="/config/images/official/icon_instagram.png" />
          </a>
          <a className="icon" href="https://www.youtube.com/channel/UCgaQd_UyhKMGbRuNmRy61nQ" target="_blank">
            <img className="icon_img" src="/config/images/official/icon_video.png" />
          </a>
        </div>
      </div>
      <div className="beergang">BEERGANG</div>
      <div className="presale">#PHASE 1</div>
      <div className="march_2022">
        <span className="gradient">Q3, 2022</span>
      </div>
      <div className="wallet">
        Connect to Metamask
        <img className="wallet_icon" src="/config/images/official/icon_arrow.png" />
      </div>
    </Container>
  )
}

export default Promotion
