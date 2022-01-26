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
  margin-bottom: 114px;

  @media (max-width: 767px) {
    max-width: unset;
    padding-left: 20px;
    padding-right: 20px;
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

  .bold_texts {
    font-weight: bold;
    margin-bottom: 36px;
    @media (max-width: 767px) {
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 24px;
    }
  }
`

const DescriptionKr = () => {
  return (
    <Container>
      <div className="bold_texts">GoodGang Labs의 첫 프로젝트인 Beergang NFT 아바타 콜렉션을 소개합니다.</div>
      <div className="texts">GoodGang Labs는 메타버스 프라이빗 Web 3.0 커뮤니티를 만들고 있으며, 우리의 미션은 “사람들이 자신의 진정한 자아를 표현하고 본인의 열정과 재능을 이용해 정당한 수익을 창출할수 있도록 도움으로써 세상을 재미있고 좀 더 나은곳으로 만드는것” 입니다.</div>
      <div className="texts">GoodGang Labs는 글로벌 IT 탑티어 회사(페이스북, 네이버, 라인, 스노우 등)에서 메타버스, 커뮤니티, 아바타, 인공지능, 증강 현실 관련 프로젝트를 수행한 10년 넘는 경력을 보유한 프로페셔널로 구성되어 있습니다. 현재 멤버들은 주요 세계 도시(샌프란시스코, 서울, 하와이, 밴쿠버 등)에 거주하며 원격으로 근무하고 있습니다. Beergang 캐릭터는 멤버들의 이런 다양한 경험과 어우러져 독특한 매력을 가지고 있습니다.</div>
      






    </Container>
  )
}

export default DescriptionKr
