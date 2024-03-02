
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
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import MainPage from './components/StudentHome/MainPage'
import Root from './routes/Root'
import StudentSchedule from './components/StudentHome/StudentSchedule'
import StudentExams from './components/StudentHome/StudentExams'
import Notes from './components/StudentHome/Notes'
import Whiteboard from './components/StudentHome/Whiteboard'
import Settings from './components/StudentHome/Settings/Settings'
import Teachers from './components/StudentHome/Teachers'
import DailyMarks from './components/StudentHome/DailyMarks'
import Notification from './components/StudentHome/Notification/Notification'
import CenterCources from './components/StudentHome/CenterCources'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"/",
        element:<MainPage />,
      },
      {
        path:"/StudentSchedule",
        element:<StudentSchedule />,
      },
      {
        path:"/StudentExams",
        element:<StudentExams />,
      },
      {
         path:"/Notes",
         element:<Notes />,
      },
      {
        path:"/Whiteboard",
        element:<Whiteboard />,
      },
      {
          path:"/Settings",
          element:<Settings />
      },
      {
           path:"/DailyMarks",
           element:<DailyMarks />,
      },
      {
        path:"/Board",
        element:<BoardAds />,
      },
      {
        path:"/Teachers",
        element:<Teachers />,
      },
      {
        path:"/Welcome",
        element:<Welcome />
      },
      {
        path:"/ChatApplication",
        element:<ChatApplication />
      },
      {
        path:"/Notification",
        element:<Notification />
      }

    ],  
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
