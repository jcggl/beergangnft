import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  width: 100%;
  max-width: 996px;
  justify-content: space-between;
  text-align: center;
  color: #ffffff;
  margin-bottom: 88px;

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 50px;
  }

  .texts {
    margin-bottom: 36px;
    :last-child {
      margin-bottom: 0;
    }
    @media (max-width: 767px) {
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 24px;
    }
  }

  .title {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 135px;
    font-feature-settings: 'pnum' on, 'lnum' on;

    @media (max-width: 767px) {
      font-size: 48px;
      line-height: 58px;
    }

    .highlight {
      color: #FF6700;
    }
  }

  .subtitle {
    width: unset;
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #000000;
    background: #FF6700;

    @media (max-width: 767px) {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`

const AboutBeergangKr = () => {
  return (
    <Container>
      <div className="title texts">About{' '}<span className="highlight">BEERGANG</span></div>
      <div className="texts"><span className="subtitle">The GOOD Web 3.0 Community on Metaverse</span></div>
      <div className="texts">Beergang은 GoodGang Labs에서 자체 제작한 홈브루 알고리즘에 기반해 제작되어 이더리움 블록체인 네트워크 및 IPFS에 저장된 10,000개의 유니크한 NFT 아바타 콜렉션입니다.</div>
      <div className="texts">비어갱 홀더들은 다양한 멤버쉽 혜택을 받게 됩니다. 대표적으로 금년 Q2에 런칭될 프라이빗 3D 메타버스 Pub인 GangHouse에 입장할수 있는 PASS를 받게됩니다. 실제 메타버스 공간인 GangHouse에서 공통의 관심사(Web3, Metaverse)를 가진 다양한 배경의 멤버들과 소통하며 앞으로 다가올 미래를 미리 경험하고 함께 만들어 나갈수 있을 것으로 기대됩니다.</div>
      <div className="texts">곧 더 많은 Beergang 관련 업데이트가 있을 예정이니 많은 관심과 기대 부탁드립니다! <br/>최신 소식 및 업데이트는 GoodGang Labs의 공식 트위터 및 디스코드에서 확인하실수 있습니다.</div>
    </Container>
  )
}

export default AboutBeergangKr
