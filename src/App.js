import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteChangeTracker from './components/RouteChangeTracker'
import Main from './pages/Main'
import Official from './pages/Official'
import Teaser from './pages/Teaser'
import TeaserKr from './pages/TeaserKr'
import Terms from './pages/Terms'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteChangeTracker />
        <Routes>
          <Route path="/" element={<Teaser />} />
          <Route path="/main" element={<Main />} />
          <Route path="/teaser" element={<Teaser />} />
          <Route path="/teaser/kr" element={<TeaserKr />} />
          <Route path="/teaser/terms" element={<Terms />} />
          <Route path="/official0430" element={<Official />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
