import React from 'react'
import Student from '../components/StudentHome/Student'
import { Outlet } from 'react-router-dom'

function Root() {

  return (
    <>
        <Student />
        <Outlet />
    </>
  )
}

export default Root
