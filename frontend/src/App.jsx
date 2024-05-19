import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/auth/login/LoginPage';
import SignupPage from './Page/auth/signup/SignupPage';
import NotificationPage from './Page/notification/NotificationPage';

import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel';
import ProfilePage from './Page/profile/ProfilePage';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner';


const App = () => {
  const { data: authUser, isLoading, isError, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        console.log("auth is here", data);
        return data
      } catch (error) {
        throw new Error(error);
      }
    }
  });
  
	if (isLoading) {
	
			<div className='h-screen flex justify-center items-center'>
				<LoadingSpinner size='lg' />
			</div>
		
  }
  return (
    <div className='flex max-w-6xl mx-auto' >
      <Sidebar/>
      <Routes>
        <Route path="/" element={authUser? <HomePage/> : <Navigate to ="/login" />} />
        <Route path="/signup" element={authUser ?<SignupPage/>: <Navigate to ="/" />} />
        <Route path='/login' element={authUser? <LoginPage /> : <Navigate to ="/" />} />
        <Route path='/notifications' element={authUser? <NotificationPage /> : <Navigate to ="/login" />} />
        <Route path='/profile/:username' element={authUser? <ProfilePage />: <Navigate to ="/login" />} />
      </Routes>
      <RightPanel />
      <Toaster/>
    </div>
  )
}

export default App
