import { useState, useEffect } from 'react'

const useAudio = ({ url, autoPlay = true, loop = true }) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing)

  audio.autoplay = autoPlay
  audio.loop = loop

  // const autoPlayEvent = () => {
  //   console.log('clicked')
  //   setPlaying(true)
  // }
  // useEffect(() => {
  //   document.addEventListener('scroll', autoPlayEvent)
  //   return () => document.removeEventListener('scroll', autoPlayEvent)
  // }, [])

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

export default useAudio
