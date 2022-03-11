import React from 'react'
import styled from 'styled-components'

const DetailOne = () => {
  const Container = styled.div`
    img {
      display: block;
      width: 730px;
      margin: 85px 65px 0 auto;
    }
  `

  return (
    <Container>
      <div className="title">A living creature on blockchain.</div>
      <div className="sub">An emotional representation of ourselves on the metaverse.</div>
      <img src="/config/images/official/about/detail1.png" />
    </Container>
  )
}

export default DetailOne
