import React from 'react'
import styled from 'styled-components'
import Header from '../components/official/Header'
import Promotion from '../components/official/Promotion'
import Intro from '../components/official/Intro'
import FourTribes from '../components/official/FourTribes'
import About from '../components/official/About'
import Roadmap from '../components/official/Roadmap'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    width: 100%;
    background-color: #000000;
  }
`

const Official = () => {
  return (
    <Container>
      <Header />
      <Promotion />
      <div className="contents">
        <Intro />
        <FourTribes />
        <Roadmap />
      </div>
    </Container>
  )
}

export default Official
