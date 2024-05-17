import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/auth/login/LoginPage';
import SignupPage from './Page/auth/signup/SignupPage';


const App = () => {
  return (
    <div className='flex max-w-6xl mx-auto' >
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
