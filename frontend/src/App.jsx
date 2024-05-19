import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/auth/login/LoginPage';
import SignupPage from './Page/auth/signup/SignupPage';
import NotificationPage from './Page/notification/NotificationPage';

import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel';
import ProfilePage from './Page/profile/ProfilePage';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className='flex max-w-6xl mx-auto' >
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
      <RightPanel />
      <Toaster/>
    </div>
  )
}

export default App
