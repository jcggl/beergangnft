import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  margin-top: 52px;

  @media (max-width: 767px) {
    width: 264px;
    margin-top: 40px;
  }

  .metaverse_title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 66px;
    color: #ff6700;
    margin-left: 30px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    z-index: 1;

    @media (max-width: 767px) {
      font-size: 28px;
      line-height: 40px;
      margin-left: 10px;
    }
  }

  .metaverse_box {
    background-color: #101010;
    width: 100%;
    border: 1px solid;
    border-image: linear-gradient(to bottom, #ff6700aa, #ff670000);
    border-image-slice: 1;
    margin-top: -34px;
    padding: 70px 32px 73px 32px;

    @media (max-width: 767px) {
      margin-top: -20px;
      padding: 32px 16px;
    }

    .metaverse_subject {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 10px;

      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 4px;
      }
    }

    .metaverse_desc {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 21px;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }

    .metaverse_in_progress img {
      width: 178px;
      height: 46px;
      margin-bottom: 60px;

      @media (max-width: 767px) {
        width: 100px;
        height: 30px;
        margin-bottom: 30px;
      }
    }

    .metaverse_done img {
      width: 154px;
      height: 46px;
      margin-bottom: 60px;

      @media (max-width: 767px) {
        width: 120px;
        height: 30px;
        margin-bottom: 30px;
      }
    }

    .metaverse_to_be_continued img {
      width: 194px;
      height: 46px;

      @media (max-width: 767px) {
        width: 121px;
        height: 30px;
      }
    }

    .gray_color {
      color: #71717a;
    }
  }
`

const Metaverse = () => {
  return (
    <Container>
      <div className="metaverse_title">Metaverse</div>
      <div className="metaverse_box">
        <div className="metaverse_subject">GIFs</div>
        <div className="metaverse_desc gray_color">
          You can access Beergang GIF and emojis from Twitter, Instagram, Tiktok, Messenger, and anywhere that provides
          GIF access! Try searching 'Beergang' or 'GoodGang Labs.'
        </div>
        <div className="metaverse_done">
          <img src="/config/images/official/roadmap_done.png" />
        </div>

        <div className="metaverse_subject">GangHouse</div>
        <div className="metaverse_desc gray_color">
          GangHouse, a private 3D metaverse Pub (equivalent yet more interactive metaverse space of our Discord server)
          that will launch in Q2 this year. In GangHouse, you will experience and create the future together by
          communicating with other holders through text messages, voice, and video chat from various backgrounds with
          common interests
        </div>
        <div className="metaverse_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>

        <div className="metaverse_subject">3D file</div>
        <div className="metaverse_desc gray_color">
          Live 3D file updates for your Beergang to use from the Metaverse and across different platforms. The file will
          be available to download in: .fbx .glb. format. The members can also use their Beergangs to create their own
          art-works
        </div>
        <div className="metaverse_in_progress">
          <img src="/config/images/official/roadmap_in_progress.png" />
        </div>

        <div className="metaverse_subject gray_color">GoodGang Marketplace</div>
        <div className="metaverse_desc gray_color">
          Buy and sell unique virtual items from GoodGang Labs. Creators can customize their own Beergang avatars.
        </div>
        <div className="metaverse_to_be_continued">
          <img src="/config/images/official/roadmap_continued.png" />
        </div>
      </div>
    </Container>
  )
}

export default Metaverse
