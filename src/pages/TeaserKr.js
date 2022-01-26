import React from "react"
import styled from "styled-components"
import CommingSoon from "../components/CommingSoon"
import CheersBeergang from "../components/CheersBeergang"
import Header from "../components/Header"
import DescriptionKr from "../components/DescriptionKr"
import JoinButtons from "../components/JoinButtons"
import Footer from "../components/Footer"
import AboutBeergangKr from "../components/AboutBeergangKr"

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
      <Header lang={'ko_KR'} />
      <CommingSoon />
      <CheersBeergang />
      <DescriptionKr />
      <AboutBeergangKr />
      <JoinButtons />
      <Footer />
    </Container>
  )
}

export default Teaser
