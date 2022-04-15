import React from 'react'
import styled from 'styled-components'
import { RenderIfElse } from './RenderIf'

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
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  text-align: center;
  color: #ffffff;

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
    max-width: 970px;
    font-style: italic;
    font-weight: 600;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 24px;
    }
  }
`

const Description = () => {
  const windowSize = window.matchMedia('screen and (max-width: 767px)')

  return (
    <Container>
      <RenderIfElse renderFirst={windowSize.matches}>
        <div className="intro">
          Introducing Beergang, the first project of <br />
          GoodGang Labs. Our mission is:
        </div>
        <div className="intro">Introducing Beergang, the first project of GoodGang Labs. Our mission is:</div>
      </RenderIfElse>
      <div className="mission">
        “To make the world a better place by helping people express their true identities and use their passion and
        talents to generate legitimate revenue in a fun way.”
      </div>
    </Container>
  )
}

export default Description
