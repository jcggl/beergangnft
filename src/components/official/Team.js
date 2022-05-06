import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 122px 50px;

  @media (max-width: 992px) {
    padding: 66px 50px;
  }

  @media (max-width: 767px) {
    padding: 38px 0;
  }

  .title {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 120px;
    line-height: 120px;
    color: #ffffff;
    margin-bottom: 40px;

    @media (max-width: 992px) {
      font-size: 80px;
      line-height: 100px;
      letter-spacing: 0.03em;
      margin-bottom: 20px;
    }

    @media (max-width: 767px) {
      font-size: 48px;
      line-height: 56px;
      padding: 0 20px;
      margin-bottom: 16px;
    }
  }

  .desc {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: #a1a1aa;
    margin-bottom: 90px;

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 32px;
      margin-bottom: 46px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 20px;
      padding: 0 20px;
      margin-bottom: 40px;
    }
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media (max-width: 767px) {
      flex-wrap: nowrap;
      overflow: auto;
      padding: 0 20px;
    }
  }
`

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 270px;

  @media (max-width: 992px) {
    width: unset;
    height: unset;
    min-width: 324px;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    min-width: 208px;
    height: unset;
    margin-right: 16px;
  }

  .name {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #ff6700;
    margin-bottom: 14px;

    @media (max-width: 992px) {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 10px;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 8px;
    }
  }

  .role {
    margin-bottom: 10px;

    @media (max-width: 992px) {
      margin-bottom: 8px;
    }

    @media (max-width: 767px) {
      margin-bottom: 4px;
    }

    .role_box {
      background: #1f1f1f;
      border: 1px solid #ff6700;
      border-radius: 2px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      color: #ffffff;
      padding: 6px 12px;

      @media (max-width: 992px) {
        font-size: 12px;
        line-height: 20px;
      }

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 20px;
        padding: 3px 6px;
      }
    }
  }

  .introduce {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 10px;

    @media (max-width: 992px) {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 4px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }

  .sns_info {
    display: flex;

    .icon {
      width: 32px;
      height: 32px;
      margin-right: 2px;

      @media (max-width: 767px) {
        width: 28px;
        height: 28px;
      }

      .icon_img {
        width: 24px;
        height: 24px;

        @media (max-width: 767px) {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
`

const Member = ({ name, role, desc, snsInfo }) => {
  return (
    <MemberContainer>
      <div className="name">{name}</div>
      <div className="role">
        <span className="role_box">{role}</span>
      </div>
      <div className="introduce">{desc}</div>
      {snsInfo && (
        <div className="sns_info">
          {snsInfo.twitter && (
            <div className="icon">
              <img className="icon_img" src="/config/images/official/icon_twitter_gray.png" />
            </div>
          )}
          {snsInfo.linkedin && (
            <div className="icon">
              <img className="icon_img" src="/config/images/official/icon_linkedin_gray.png" />
            </div>
          )}
          {snsInfo.instagram && (
            <div className="icon">
              <img className="icon_img" src="/config/images/official/icon_instagram_gray.png" />
            </div>
          )}
        </div>
      )}
    </MemberContainer>
  )
}

const Team = ({ teamRef }) => {
  return (
    <Container ref={teamRef}>
      <div className="title">The Team</div>
      <div className="desc">
        Beergang is the first project of GoodGang Labs. Our mission is “To make the world a fun and a better place by
        helping people express their true identity and use their passion and talents to generate legitimate revenue.”{' '}
        <br />
        <br />
        We are backed by partners from Meta, Snap, Naver, Kakao, Planetarium, Kimgisa Lab, and other leading investors.
        Born amid pandemic, GoodGang Labs is made up of professionals with more than 10 years of experience in
        Metaverse, Community, Avatar, AI and AR/VR related projects in global top tier tech companies (Meta, Google,
        Naver, Line, Snow, and more). Currently, members live and work remotely in major global cities (San Francisco,
        Seoul, Hawaii, and Vancouver). The Beergang character has a unique charm that blends with the various
        experiences of the members.
      </div>
      <div className="members">
        <Member
          {...{
            name: 'Choco Storm',
            role: 'PM/BD',
            desc: 'Become a minimalist in my next life',
            snsInfo: {
              twitter: 'twitter',
            },
          }}
        />
        <Member
          {...{
            name: 'Nani',
            role: 'Marketing / Social Media',
            desc: 'Driven by visual aesthetics',
            snsInfo: {
              linkedin: 'linkedin',
              instagram: 'instagram',
            },
          }}
        />
        <Member
          {...{
            name: 'Patty Boop',
            role: 'Creative Direction / 2D Art',
            desc: 'Desire to make the hottest burger in the galaxy',
            snsInfo: {
              linkedin: 'linkedin',
              instagram: 'instagram',
            },
          }}
        />
        <Member
          {...{
            name: 'Sneaker Geek',
            role: 'iOS',
            desc: 'Looking at the latest shoe releases everyday',
          }}
        />
        <Member
          {...{
            name: 'ddong',
            role: 'Motion Graphics',
            desc: 'especially love the poop artwork',
          }}
        />
        <Member
          {...{
            name: 'B099119',
            role: 'UX / UI ',
            desc: 'Regular customer of Ganghouse, always drunk',
          }}
        />
        <Member
          {...{
            name: 'Kiwiwi',
            role: '3D Art',
            desc: 'Trying to collect every master peace',
          }}
        />
        <Member
          {...{
            name: 'Squishy',
            role: '3D Motion Art',
            desc: 'Kawaii outside, angry inside',
          }}
        />
        <Member
          {...{
            name: 'Eggsy',
            role: 'AI / Machine Learning',
            desc: 'Iron hand in a velvet glove',
            snsInfo: {
              linkedin: 'linkedin',
            },
          }}
        />
        <Member
          {...{
            name: 'Meta Pilot',
            role: 'Computer Vision / Blockchain ',
            desc: 'enjoy flying in dream',
          }}
        />
        <Member
          {...{
            name: 'Brain Empty',
            role: 'Front-End',
            desc: 'Looking for happiness',
          }}
        />
        <Member
          {...{
            name: 'Mangosteen',
            role: 'Community',
            desc: 'Love traveling, cafe hopping (But first, Coffee)',
          }}
        />
        <Member
          {...{
            name: 'ycyhw',
            role: 'Community / Music',
            desc: 'Musician by day, an NFT trader by night',
            snsInfo: {
              instagram: 'instagram',
              twitter: 'twitter',
            },
          }}
        />
        <Member
          {...{
            name: 'Moooo',
            role: '3D Art',
            desc: 'Realistic Dreamer',
          }}
        />
      </div>
    </Container>
  )
}

export default Team
