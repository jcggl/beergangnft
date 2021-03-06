import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  .desktop_image {
    display: block;
    max-width: 730px;
    width: 100%;
    margin: 85px 65px 0 auto;
  }
  .mobile_image {
    display: none;
    width: 100%;
    max-width: 320px;
    margin-top: 13px;
  }
  @media (max-width: 992px) {
    .desktop_image {
      display: block;
      width: 668px;
      margin: 40px 0 0;
    }
    .mobile_image {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .desktop_image {
      display: none;
    }
    .mobile_image {
      display: block;
    }
  }
`

const DetailOne = () => {
  return (
    <Container>
      <div className="title">A living creature on blockchain.</div>
      <div className="sub">An emotional representation of ourselves on the metaverse.</div>
      <img className="desktop_image" src="/config/images/official/about/detail1.png" />
      <img className="mobile_image" src="/config/images/official/about/detail1_mobile.png" />
    </Container>
  )
}

export default DetailOne
