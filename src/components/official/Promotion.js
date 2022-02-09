import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1960px;
  height: 1080px;
  color: #ffffff;
  background-image: url('/config/images/official/img_main.png');
  font-family: Anton;
  font-style: normal;
  font-weight: normal;
  font-size: 95px;
  line-height: 102px;

  .beergang {
    margin-top: 402px;
    margin-left: 120px;
  }

  .presale {
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    color: #000000;
    margin-left: 120px;
  }

  .march_2022 {
    margin-left: 120px;
    
    .gradient {
      background: linear-gradient(to right, #FF7D00, #F54303);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .wallet {
    margin-top: 82px;
    margin-left: 120px;
  }

  .metaverse {
    display: flex;
    margin-top: 44px;
    padding-right: 120px;
    width: 100%;
    max-width: 1960px;
    justify-content: right;
  }
`

const Promotion = () => {

  return (
    <Container>
      <div className="beergang">BEERGANG</div>
      <div className="presale">PRE-SALE</div>
      <div className="march_2022"><span className="gradient">MARCH 2022</span></div>
      <div className="wallet"><img src="/config/images/official/connect_wallet.png"/></div>
      <div className="metaverse"><img src="/config/images/official/view_on_metaverse.png"/></div>
    </Container>
  )
}

export default Promotion
