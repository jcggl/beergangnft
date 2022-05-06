import React, { useState } from 'react'
import styled from 'styled-components'
import useAudio from '../../hooks/useAudio'
import music from '../../statics/musics/Beer_Gang_M1NU.mp3'

const Container = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 133px;
  top: 900px;
  font-family: 'Poppins';

  @media (max-width: 992px) {
    display: none;
  }

  .music_box_area {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    bottom: 0;
    left: 120px;

    .small_music_box {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 66px;
      height: 60px;
      background: #000000;
      box-sizing: border-box;
      border: 0.5px #ff6700;
      border-radius: 6px;

      .music_icon {
        width: 50px;
        height: 44px;
      }
    }
    .large_music_box {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      background: #000000;
      box-sizing: border-box;
      border: 0.5px #ff6700;
      border-radius: 6px;
      margin-left: 24px;
      padding-left: 8px;
      padding-right: 8px;

      .music_icon {
        width: 50px;
        height: 44px;
      }
      .music_info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        font-feature-settings: 'pnum' on, 'lnum' on;

        .title {
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
          color: #ffffff;
        }
        .artist {
          margin-top: 2px;
          font-weight: 400;
          font-size: 10px;
          line-height: 14px;
          color: #71717a;
        }
      }
      .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        button {
          width: 32px;
          height: 32px;
          border: none;
          cursor: pointer;
        }
        .prev_btn {
          background: url('/config/images/official/icon_prev_music.png');
          background-size: cover;
        }
        .play_pause_btn {
          margin: 0 4px;
          background-color: #000000;
          background-size: cover;
        }
        .next_btn {
          background: url('/config/images/official/icon_next_music.png');
          background-size: cover;
        }
      }
    }
  }

  .metaverse_box {
    position: absolute;
    bottom: 0;
    right: 140px;

    .metaverse_button {
      width: 490px;
      height: 133px;
      background: url('/config/images/official/view_on_metaverse.png') no-repeat;
      background-size: cover;
      border: 0;
      opacity: 0.8;

      &:hover {
        background: url('/config/images/official/view_on_metaverse_hover.png') no-repeat;
        background-size: cover;
        cursor: pointer;
      }
    }
  }
`

const Floatings = () => {
  const [musicBox, setMusicBox] = useState(false)
  const [musicNum, setMusicNum] = useState(0)
  const [playing, toggle] = useAudio({ url: music, loop: true })
  const songs = [
    {
      title: 'Beer Gang',
      artist: 'M1NU',
      src: 'statics/musics/Beer_Gang_M1NU.mp3',
    },
  ]

  const onHoverMusicBox = () => {
    setMusicBox(true)
  }
  const onLeaveMusicBox = () => {
    setMusicBox(false)
  }
  const onClickMetaverse = () => {}

  return (
    <Container>
      <div className="music_box_area" onMouseEnter={onHoverMusicBox} onMouseLeave={onLeaveMusicBox}>
        <div className="small_music_box">
          <img className="music_icon" src="/config/images/official/icon_music.png" />
        </div>
        {musicBox && (
          <div className="large_music_box">
            <img className="music_icon" src="/config/images/official/icon_music.png" />
            <div className="music_info">
              <p className="title">{songs[musicNum].title}</p>
              <p className="artist">{songs[musicNum].artist}</p>
            </div>
            <div className="buttons">
              {/*<button className="prev_btn" />*/}
              <button
                className="play_pause_btn"
                onClick={toggle}
                style={{
                  backgroundImage: playing
                    ? "url('/config/images/official/icon_pause.png')"
                    : "url('/config/images/official/icon_play.png')",
                }}
              />
              {/*<button className="next_btn" />*/}
            </div>
          </div>
        )}
      </div>
      <div className="metaverse_box">
        <button className="metaverse_button" onClick={onClickMetaverse} />
      </div>
    </Container>
  )
}

export default Floatings
