import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 122px 0;

  @media (max-width: 992px) {
    padding: 66px 50px;
  }
  @media (max-width: 767px) {
    padding: 38px 20px;
  }
`

const Universe = () => {
  return (
    <Container>
      <img src="/config/images/official/beergang_universe.png" alt={'beergang_universe'} />
    </Container>
  )
}

export default Universe
