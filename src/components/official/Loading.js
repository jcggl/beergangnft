import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000000 url('/config/images/official/logo_animation.gif') no-repeat center;
  background-size: auto;
  z-index: 100;
  //height: 1080px;
  color: #ffffff;
  font-weight: bold;
  font-size: 100px;

  @media (max-width: 992px) {
    background-size: 60%;
  }
  @media (max-width: 767px) {
    background-size: 60%;
  }
`

const Loading = ({ loading }) => {
  if (loading) return <Container />
  return null
}

export default Loading
