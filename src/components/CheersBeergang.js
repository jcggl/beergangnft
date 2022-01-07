import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 333px;
`

const BottleCap = styled.div`
  display: flex;
  position: absolute;
  left: 954px;
  top: 170px;
`

const CheersBeergang = () => {
  return (
    <Container>
      <img src='/config/images/say_cheers.svg' />
      <BottleCap>
        <img src='/config/images/img_bottle_cap.png' />
      </BottleCap>
    </Container>
  )
}

export default CheersBeergang
