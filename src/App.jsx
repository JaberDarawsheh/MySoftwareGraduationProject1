
import './App.css'
import React from 'react'
import LoginSign from './components/LoginSignUpParent'
import LoginTeacher from './components/LoginTeacher'
import Welcome from './components/WelcomePage/Welcome'
import ChatApplication from './components/createChat/chatApplication'
import StudentLogin from './components/StudendLogin/LoginSignUp'
import BoardAds from './components/BulletinBoard/Board'
import Student from './components/StudentHome/Student'
import StudentDetailes from './components/StudentHome/StudentDetailes'
import Calender from './components/StudentHome/Calender'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import MainPage from './components/StudentHome/MainPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
  },
]);

function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}


export default App
