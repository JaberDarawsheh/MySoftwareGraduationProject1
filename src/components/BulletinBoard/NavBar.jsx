import React from 'react'
import './Bord.css'

function NavBar() {
  return (
    <div className='navBar'>

          <div style={{fontSize:'9px'}} className='dateAndTimeNow'>
                <h1 style={{marginBottom:'20px'}}>
                    التخصص: علمي
                </h1>
          </div>
          <div className='info'>
             <h2>بامكانك تتطلع على اعلانات المواد الذي تم تسجيلها بالمركز</h2>
          </div>

          <div className='header'>
          <i style={{fontSize:'25px'}} className="fas fa-bullhorn"></i>
          <span style={{fontSize:'25px',marginLeft:'15px'}}>لوحة الاعلانات</span>

          </div>
    </div>
  )
}

export default NavBar
