import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
  width: 1200px;
  height: 358px;
  color: #ffffff;
`

const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 68px;
  background: #4FA5F1;
  border-radius: 2px;
  border: none;
  margin-right: 24px;
  cursor: pointer;
  
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    padding-right: 10px;
  }
`

const DiscordButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 68px;
  background: #5B68EA;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    padding-right: 10px;
  }
`

const JoinButtons = () => {
  return (
    <Container>
      <TwitterButton>
        <div className="text">Join Twitter</div>
        <img src='/config/images/twitter.svg' />
      </TwitterButton>
      <DiscordButton>
        <div className="text">Join Discord</div>
        <img src='/config/images/discord.svg' />
      </DiscordButton>
    </Container>
  )
}

export default JoinButtons
