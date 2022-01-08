import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Teaser from './pages/Teaser'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/teaser' element={<Teaser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
