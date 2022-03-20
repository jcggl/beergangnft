import React from 'react'
import styled from 'styled-components'
import Header from '../components/official/Header'
import Promotion from '../components/official/Promotion'
import Intro from '../components/official/Intro'
import About from '../components/official/About'
import FourTribes from '../components/official/FourTribes'
import Showcase from '../components/official/Showcase'
import Roadmap from '../components/official/Roadmap'
import Partnerships from '../components/official/Partnerships'
import Join from '../components/official/Join'

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
        <About />
        <FourTribes />
        <Showcase />
        <Roadmap />
        <Partnerships />
        <Join />
      </div>
    </Container>
  )
}

export default Official
