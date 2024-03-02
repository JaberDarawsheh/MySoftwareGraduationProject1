import React from 'react'
import './Bord.css'
import NavBar from './NavBar'

function BoardAds() {
  return (
    <div className='board'>
          <div  className='boardContainer'>
            <NavBar />
                     <div className='box1'>
                
                         <div className='innerBox1'>

                         </div>
                     </div>

                     <div className='box2'>
                 
                     <div className='innerBox2'>
                    
                   </div>
                     </div>

            <div className='box3'>
                 <div className='box3Container'>
                      

                      <div className='firstCource'>
                      <a style={{fontSize:'30px'}} href="#">📢</a>
                             <h2 style={{color:'white'}}>رياضيات</h2>
                             <a style={{fontSize:'30px'}} href="#">📆</a>
                      </div>
                      <div className='secondCource'>
                      <a style={{fontSize:'30px'}} href="#">📢</a>
                             <h2 style={{color:'white'}}>فيزياء</h2>
                             <a style={{fontSize:'30px'}} href="#">📆</a>
                      </div>
                      <div className='thiredCource'>

                             <a style={{fontSize:'30px'}} href="#">📢</a>
                             <h2 style={{color:'white'}}>كيمياء</h2>
                             <a style={{fontSize:'30px'}} href="#">📆</a>
                      </div>
                      <div className='FourCource'>

                      <a style={{fontSize:'30px'}} href="#">📢</a>
                                   <h2 style={{color:'white'}}>English</h2>
                                   <a style={{fontSize:'30px'}} href="#">📆</a>
                            </div>

                </div>
            </div>
            <div className='box4'>
                  <div className='box4Container'>

                    <div className='innerBox4'>
                   </div>

                  </div>
            </div>

           
           
            <div className='box5'>
                   <div className='box5Container'>
                          
                   </div>
            </div>
        
          </div>
    </div>
  )
}

export default BoardAds;
