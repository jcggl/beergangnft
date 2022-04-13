import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    max-width: 1200px;
    padding: 257px 0 43px;
    margin-top: 0;
    @media (max-width: 992px) {
      padding: 120px 50px 24px;
      margin-top: 0;
    }
    @media (max-width: 767px) {
      padding: 40px 20px;
      margin-top: 80px;
    }

    .main {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding-bottom: 83px;
      border-bottom: 1px solid #3f3f46;
      @media (max-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 36px;
        border-bottom: 1px solid #3f3f46;
      }
      @media (max-width: 767px) {
        flex-direction: column-reverse;
        justify-content: unset;
        padding-bottom: 0;
        border-bottom: 0;
      }

      .main_logo {
        padding-top: 0;
        border-top: 0;
        @media (max-width: 992px) {
          padding-top: 0;
          border-top: 0;
        }
        @media (max-width: 767px) {
          padding-top: 20px;
          border-top: 1px solid #3f3f46;
        }

        img {
          width: 224px;
          height: 66px;
          @media (max-width: 992px) {
            width: 102px;
            height: 30px;
          }
          @media (max-width: 767px) {
            width: 109px;
            height: 32px;
          }
        }
      }

      .links {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        @media (max-width: 767px) {
        }

        .operations {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: flex-end;
          width: 225px;
          @media (max-width: 992px) {
            width: 160px;
          }
          @media (max-width: 767px) {
            width: 140px;
          }

          img {
            width: 40px;
            @media (max-width: 992px) {
              width: 30px;
            }
            @media (max-width: 767px) {
              width: 24px;
            }
          }
        }

        .desc {
          display: flex;
          flex-flow: row nowrap;
          margin-top: 36px;
          color: #ffffff;
          font-family: Poppins;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          @media (max-width: 992px) {
            flex-direction: row;
            margin-top: 36px;
            font-size: 12px;
            line-height: 18px;
          }
          @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-end;
            margin-top: 24px;
            font-size: 12px;
            line-height: 20px;
          }

          .menu {
            margin-left: 40px;
            margin-bottom: 0;
            @media (max-width: 992px) {
              margin-left: 24px;
              margin-bottom: 0;
            }
            @media (max-width: 767px) {
              margin-left: 0;
              margin-bottom: 16px;
            }

            a:link,
            a:visited,
            a:hover {
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }
    }

    .copyright {
      margin-top: 23px;
      color: #71717a;
      text-align: right;
      font-size: 12px;
      line-height: 18px;
      @media (max-width: 767px) {
        margin-top: 16px;
        text-align: right;
        font-size: 9px;
        line-height: 13.5px;
      }
      @media (max-width: 767px) {
        margin-top: 10px;
        text-align: left;
        font-size: 9px;
        line-height: 13.5px;
      }
    }
  `

  return (
    <Container>
      <div className="main">
        <a href="/official" className="main_logo">
          <img src="/config/images/logo/GGlabs/main_white.png" />
        </a>
        <div className="links">
          <div className="operations">
            <a className="img_link">
              <img className="icon_opensea" src="/config/images/official/icon_opensea.png" />
            </a>
            <a className="img_link" href="https://twitter.com/beergang_nft" target="_blank">
              <img className="icon_twitter" src="/config/images/official/icon_twitter.png" />
            </a>
            <a className="img_link">
              <img className="icon_discord" src="/config/images/official/icon_discord.png" />
            </a>
            <a className="img_link" href="https://www.instagram.com/beergang_nft/" target="_blank">
              <img className="icon_instagram" src="/config/images/official/icon_instagram.png" />
            </a>
          </div>
          <div className="desc">
            <div className="menu">
              <a href="mailto:hello@goodganglabs.com">hello@goodganglabs.com</a>
            </div>
            <div className="menu">
              <a href="https://www.iubenda.com/privacy-policy/98145850">Privacy Policy</a>
            </div>
            <div className="menu">
              <a href="/teaser/terms">Terms &#38; Conditions</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Ⓒ2021 GOOD GANG LABS PTE. LTD. All rights reserved</div>
    </Container>
  )
}

export default Footer
