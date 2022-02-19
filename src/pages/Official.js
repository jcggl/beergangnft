import React from "react"
import styled from "styled-components"
import Header from "../components/official/Header"
import Promotion from "../components/official/Promotion"
import Intro from "../components/official/Intro"
import About from "../components/official/About"
import Showcase from "../components/official/Showcase"
import Distribution from "../components/official/Distribution"
import Footer from "../components/Footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #101010;
`

const Official = () => {
  return (
    <Container>
      <Header />
      <Promotion />
      <Intro />
      <About />
      <Showcase />
      <Distribution />
      <Footer />
    </Container>
  )
}

export default Official
