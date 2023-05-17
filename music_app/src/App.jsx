import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home/>} />
          <Route path="/songs" element={<Pages.Songs/>} />
          <Route path="/comments" element={<Pages.Comments/>} />
          <Route path='*' element={<Pages.NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
