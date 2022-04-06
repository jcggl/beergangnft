import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 36px;
  width: 100%;
  max-width: 996px;
  justify-content: space-between;
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
  //margin-bottom: 114px;

  @media (max-width: 767px) {
    max-width: unset;
    padding: 0 20px;
  }

  .intro {
    margin-bottom: 28px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
      font-size: 12px;
      line-height: 24px;
    }
  }

  .mission {
    font-style: italic;
    font-weight: 600;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 24px;
    }
  }
`

const Description = () => {
  return (
    <Container>
      <div className="intro">Introducing Beergang, the first project of GoodGang Labs. Our mission is</div>
      <div className="mission">
        “To make the world a better place by helping people express their true identities and use their passion and
        talents to generate legitimate revenue in a fun way.”
      </div>
    </Container>
  )
}

export default Description
