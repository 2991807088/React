import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Login from '@/views/login/login'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </div>
  )
}
export default App
