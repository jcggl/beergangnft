import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 951px;
  background-image: url('/config/images/main_back.png');
  background-size: cover;
  background-position: center;
`

const CommingSoonGif = styled.img`
  width: 792px;
  height: 300px;
`

const CommingSoon = () => {
  return (
    <Container>
      <CommingSoonGif src='/config/images/text_01_speed.gif' />
    </Container>
  )
}

export default CommingSoon