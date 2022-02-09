import React from "react"
import styled from "styled-components"
import Header from "../components/official/Header"
import Promotion from "../components/official/Promotion"

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
    </Container>
  )
}

export default Official
