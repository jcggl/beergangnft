import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
  width: 1200px;
  height: 324px;
  justify-content: space-between;
  text-align: center;
  color: #ffffff;
`

const Description = () => {
  return (
    <Container>
      <div>Beergang is a collective of 1000 unique characters designed by our custom homebrew algorithm, then registered on the Ethereum blockchain.</div>
      <div>Beer is the culture that brings the world together. We strongly believe in the “Beer Before Bread” theory. There’s evidence that our ancestors were more interested in growing grain to make beer, not bread (and who wouldn’t be???). As Jeffrey Khan, a clinical associate Professor of Psychiatry, argues, beer may have been exactly what we needed to suppress our separate hunter-gather extinct and survive. It gave us time to relax, and awakened the desire to experiment, innovate, and create art - all characteristic of a flourishing and thriving civilization.</div>
      <div>It is clear that Beer was critical in our early creation, and we want to take on the same role that it has played throughout our history and use this opportunity to open a new Metaverse era.</div>
    </Container>
  )
}

export default Description
