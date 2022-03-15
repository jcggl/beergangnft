import React from 'react'
import styled from 'styled-components'

const DetailThree = () => {
  const Container = styled.div`
    @media (max-width: 360px) {
      padding-bottom: 130px;
    }
  `
  return (
    <Container>
      <div className="title">Beergang can help you transverse between metaverse and the real world.</div>
      <div className="sub">
        In reality, it is not easy to express my true identity due to various restrictions such as social customs, ego,
        and social status. Through Beergang, you can allow yourself to really be who you are in the Metaverse. From
        GangHouse, you can genuinely communicate with people of various interests with your true identity. In return,
        you can also bring your virtual identity back to the real world with ARGang, an Augmented Reality camera to help
        people express their true identities with Beergang avatars and share special moments with the world.
      </div>
    </Container>
  )
}

export default DetailThree
