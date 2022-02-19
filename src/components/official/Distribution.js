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
    max-width: 792px;
    margin-top: 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    color: #E4E4E7;
  }

  .main {
    margin-top: 28px;
  }

  .desc2 {
    max-width: 588px;
    margin-top: 28px;
    margin-bottom: 122px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    color: #E4E4E7;
    display: flex;
    align-self: flex-end;
  }
`

const Distribution = () => {

  return (
    <Container>
      <div className="title">Total Distribution</div>
      <div className="desc">10,000 avatars will be available in total, split between pre-sale and public sales. Avatars not redeemed during pre-sale will be rolled over to the public sale. All avatar traits and attributes will be generated randomly and revealed after the public sale.</div>
      <div className="main">
        <img src="/config/images/official/total_distribution.png" />
      </div>
      <div className="desc2">We tailored our distribution mechanic with our early supporters in mind, the team’s hard work, and giving a chance for those who just discovered Beergang recently to be a part of the next-gen ecosystem we’re building.</div>
    </Container>
  )
}

export default Distribution
