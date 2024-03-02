import React from 'react'
import './Bord.css'

function NavBar() {
  return (
    <div className='navBar'>

          <div style={{fontSize:'9px'}} className='dateAndTimeNow'>
                <h1 style={{color:'transparent'}}>
                    التخصص: علمي
                </h1>
          </div>
          <div className='info'>
             <h2 style={{color:'transparent'}}>بامكانك تتطلع على اعلانات المواد الذي تم تسجيلها بالمركز</h2>
          </div>

          <div className='header'>
          
          <span style={{fontSize:'25px'}}>لوحة الاعلانات</span>
          <i style={{fontSize:'25px',marginLeft:'20px',cursor:'pointer'}} className="fas fa-bullhorn"></i>

          </div>
    </div>
  )
}

export default NavBar
