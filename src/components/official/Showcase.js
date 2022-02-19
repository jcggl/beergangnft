import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

  .title {
    margin-top: 122px;
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 120px;
    line-height: 120px;
    color: #ffffff;
  }

  .desc {
    margin-top: 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 42px;
    color: #E4E4E7;
  }

  .main {
    margin-top: 40px;
  }

  .button {
    margin-top: 40px;
    margin-bottom: 152px;
  }
`

const Showcase = () => {

  return (
    <Container>
      <div className="title">Showcase</div>
      <div className="desc">Click each tribe to see how Beergangs work in Metaverse. Express your true identity through Beergang. They will mirror your facial expressions and gestures!</div>
      <div className="main">
        <img src="/config/images/official/showcase_main.png" />
      </div>
      <div className="button">
        <img src="/config/images/official/showcase_button.png" />
      </div>
    </Container>
  )
}

export default Showcase
