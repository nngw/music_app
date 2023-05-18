import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRouted from './routes'
import { AuthProvider } from './contexts'
import { NavBar } from './layout'
import * as Pages from './pages'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<ProtectedRouted redirectTo='/login' />}>
                <Route index element={<Pages.Home/>} />
                <Route path="/songs" element={<Pages.Songs/>} />
                <Route path="/comments" element={<Pages.Comments/>} />
                <Route path='*' element={<Pages.NotFound/>} />
              </Route>
              <Route path="/login" element={<Pages.Login />} />
            </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
