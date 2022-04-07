import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Official from './pages/Official'
import Teaser from './pages/Teaser'
import TeaserKr from './pages/TeaserKr'
import Terms from './pages/Terms'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Teaser />} />
          <Route path='/main' element={<Main />} />
          <Route path='/teaser' element={<Teaser />} />
          <Route path='/teaser/kr' element={<TeaserKr />} />
          <Route path='/teaser/terms' element={<Terms />} />
          <Route path='/official' element={<Official />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
