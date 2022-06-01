import Flicking from '@egjs/react-flicking'
import { Arrow } from '@egjs/flicking-plugins'
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
  max-width: 1300px;
  margin-bottom: 164px;
  padding: 0 50px;

  @media (max-width: 992px) {
    max-width: unset;
    padding: 0 50px;
    margin-bottom: 65px;
  }

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
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 992px) {
      font-size: 80px;
      line-height: 100px;
      margin-bottom: 50px;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-end;
    }

    @media (max-width: 767px) {
      margin-top: 38px;
      margin-bottom: 20px;
      font-size: 48px;
      line-height: 56px;
      flex-flow: column nowrap;
      align-items: flex-start;
    }

    .arrows {
      display: flex;
      flex-flow: row nowrap;
      position: relative;

      @media (max-width: 767px) {
        display: none;
        margin-top: 20px;
      }
      .is-outside {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 60px;
        background: #1f1f1f;
        border-radius: 4px;
        cursor: pointer;
        @media (max-width: 992px) {
          width: 50px;
          height: 42px;
        }
        @media (max-width: 767px) {
          width: 36px;
          height: 30px;
        }
      }
      .flicking-arrow-prev {
        margin-right: 10px;
      }
      img {
        width: 32.8px;
        height: 25px;
        @media (max-width: 992px) {
          width: 23px;
          height: 17px;
        }
        @media (max-width: 767px) {
          width: 17.4px;
          height: 13.5px;
        }
      }
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
  const _plugins = [new Arrow({ parentEl: document.body, moveCount: 1 })]
  return (
    <Container ref={roadmapRef}>
      <div className="title">
        <p>Roadmap</p>
        <div className="arrows">
          <span className="flicking-arrow-prev is-outside">
            <img src={'/config/images/official/icon_arrow_left.png'} />
          </span>
          <span className="flicking-arrow-next is-outside">
            <img src={'/config/images/official/icon_arrow_right.png'} />
          </span>
        </div>
      </div>
      <Flicking bound="true" plugins={_plugins}>
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
