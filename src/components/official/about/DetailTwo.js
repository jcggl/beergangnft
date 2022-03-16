import React from 'react'
import styled from 'styled-components'

const DetailTwo = () => {
  const Container = styled.div`
    position: relative;

    .cheers {
      position: absolute;
      right: 240px;
      bottom: 0;
      color: #ff6700;
      font-family: Komika Axis;
      font-size: 82px;
      font-weight: 400;
    }
    img {
      display: block;
      width: 318px;
      margin: 20px 0 20px auto;
    }
    @media (max-width: 768px) {
      .cheers {
        right: 187px;
        bottom: 12px;
        font-size: 62px;
      }
      img {
        width: 235px;
        margin: 60px 0 18px auto;
      }
    }
    @media (max-width: 360px) {
      .cheers {
        right: 83px;
        bottom: 14px;
        font-size: 49px;
        line-height: 82px;
      }
      img {
        width: 166px;
        margin: 46px 18px 51px auto;
      }
    }
  `

  return (
    <Container>
      <div className="title">A pass to our GoodGang community</div>
      <div className="sub">
        The Beergang holders will have the access to exclusive membership benefits including a PASS to enter GangHouse,
        a private 3D metaverse Pub (equivalent yet more interactive metaverse space of our Discord server) that will
        launch in Q2 this year. GangHouse will be a hideout for GoodGangs to be virtually drunk, to connect with people
        from around the world, and to make the world a fun and better place.
      </div>
      <div className="cheers">CHEERS!</div>
      <img src="/config/images/official/about/detail2.png" />
    </Container>
  )
}

export default DetailTwo
