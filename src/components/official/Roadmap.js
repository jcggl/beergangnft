import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'
import React from 'react'
import styled from 'styled-components'
import { Community, Metaverse, PhysicalWorld, TrueIdentity } from './roadmaps'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #ffffff;
  align-items: center;
  max-width: 1200px;
  margin-bottom: 164px;

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 44px;
  }

  .title {
    margin-top: 122px;
    margin-bottom: 120px;
    width: 100%;
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 120px;
    line-height: 120px;

    @media (max-width: 767px) {
      margin-top: 38px;
      margin-bottom: 20px;
      font-size: 48px;
      line-height: 56px;
    }
  }

  .roadmap_panel {
    margin-right: 50px;
    :last-child {
      margin-right: 0;
    }

    @media (max-width: 767px) {
      margin-right: 16px;
    }
  }
`

const Roadmap = ({ roadmapRef }) => {
  return (
    <Container ref={roadmapRef}>
      <div className="title">Roadmap</div>
      <Flicking bound="true">
        <div className="panel roadmap_panel">
          <TrueIdentity />
        </div>
        <div className="panel roadmap_panel">
          <Metaverse />
        </div>
        <div className="panel roadmap_panel">
          <PhysicalWorld />
        </div>
        <div className="panel roadmap_panel">
          <Community />
        </div>
      </Flicking>
    </Container>
  )
}

export default Roadmap
