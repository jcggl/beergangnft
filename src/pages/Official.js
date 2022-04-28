import React, { useRef } from 'react'
import styled from 'styled-components'
import Header from '../components/official/Header'
import Promotion from '../components/official/Promotion'
import Floatings from '../components/official/Floatings'
import Intro from '../components/official/Intro'
import About from '../components/official/About'
import Universe from '../components/official/Universe'
import FourTribes from '../components/official/FourTribes'
import Showcase from '../components/official/Showcase'
import Roadmap from '../components/official/Roadmap'
import Partnerships from '../components/official/Partnerships'
import Join from '../components/official/Join'
import Footer from '../components/official/Footer'
import Team from '../components/official/Team'

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
  const aboutRef = useRef(null)
  const showcaseRef = useRef(null)
  const roadmapRef = useRef(null)
  const communityRef = useRef(null)
  const teamRef = useRef(null)
  const refs = [aboutRef, showcaseRef, roadmapRef, communityRef, teamRef]

  return (
    <Container>
      <Header refs={refs} />
      <Promotion />
      <Floatings />
      <div className="contents">
        <Intro />
        <About aboutRef={aboutRef} />
        <Universe />
        <FourTribes />
        <Showcase showcaseRef={showcaseRef} />
        <Roadmap roadmapRef={roadmapRef} />
        <Partnerships communityRef={communityRef} />
        <Join />
        <Team teamRef={teamRef} />
        <Footer />
      </div>
    </Container>
  )
}

export default Official
