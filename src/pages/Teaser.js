import React from "react"
import styled from "styled-components"
import CommingSoon from "../components/CommingSoon"
import CheersBeergang from "../components/CheersBeergang"
import Header from "../components/Header"
import Description from "../components/Description"
import JoinButtons from "../components/JoinButtons"
import Footer from "../components/Footer"
import AboutBeergang from "../components/AboutBeergang"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #101010;
`

const Teaser = () => {
  return (
    <Container>
      <Header lang={'en_US'} />
      <CommingSoon />
      <CheersBeergang />
      <Description />
      <AboutBeergang />
      <JoinButtons />
      <Footer />
    </Container>
  )
}

export default Teaser
