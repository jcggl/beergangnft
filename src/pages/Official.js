import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/official/Header'
import Promotion from '../components/official/Promotion'
import Floatings from '../components/official/Floatings'
import Intro from '../components/official/Intro'
import About from '../components/official/About'
import Universe from '../components/official/Universe'
import FullStory from '../components/official/FullStory'
import FourTribes from '../components/official/FourTribes'
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
  const roadmapRef = useRef(null)
  const teamRef = useRef(null)
  const refs = [aboutRef, roadmapRef, teamRef]
  const [mainVisible, setMainVisible] = useState(true)

  const toggleMainVideo = () => {
    let scrollLocation = document.documentElement.scrollTop // 현재 스크롤바 위치
    // let windowHeight = window.innerHeight // 스크린 창
    let fullHeight = document.body.scrollHeight //  margin 값은 포함 x

    if (scrollLocation > fullHeight - 1000 && mainVisible) {
      setMainVisible(false)
    } else {
      setMainVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleMainVideo)
    return () => {
      window.removeEventListener('scroll', toggleMainVideo)
    }
  }, [])

  return (
    <Container>
      <Header refs={refs} />
      <Promotion mainVisible={mainVisible} />
      <Floatings />
      <div className="contents">
        <Intro />
        <About aboutRef={aboutRef} />
        <Universe />
        <FullStory />
        <FourTribes />
        <Roadmap roadmapRef={roadmapRef} />
        <Partnerships />
        <Join />
        <Team teamRef={teamRef} />
        <Footer />
      </div>
    </Container>
  )
}

export default Official
