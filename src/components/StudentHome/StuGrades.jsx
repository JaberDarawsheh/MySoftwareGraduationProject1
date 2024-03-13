import React ,{useState} from 'react'
import './StuGrade.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label } from 'semantic-ui-react';

const Marks = () =>{ 
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
    
  };

  return(
    <div className='BigContainer'>
    <img style={{width:"10%",height:'10%', position:'relative' , left:'220px', top:'260px',overflow:'hidden'}} src='src\assets\ChildMark.png' alt='ChildMark image' />
  <div className='container'>
  <section style={{height:'90%' ,marginTop:'40px'}} className="container g-2 py-5">
  <a className='back' href="#">رجوع</a>
 <div>
  <div style={{backgroundColor:'#f5f5f5', borderRadius:'18px',  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'  }} className="table-responsive mt-4 p-4 wrapper rounded-3">
    <table className="table table-scrollable">
      <thead className="bg-light text-center">
        <tr className="align-middle">
        <th className='stat'>التقييم</th>
        <th className='stat'>العلامة المستحقة</th>
        <th className='stat'>الاسم</th>
        <th className='stat'>الامتحان</th>
        <th className='stat'>صورة</th>
        <th className='stat'>رقم الطالب</th>
        </tr>
      </thead>
      <tbody className="table-hover text-center" id="userDetails">
        <tr className="align-middle">
        <td><span className="Pass">✅ناجح</span></td>
        <td>95/100</td>
        <td>احمد</td>
        <td>امتحان اول</td>
          
          <td>
            <img src="https://trybeem.com/blog/wp-content/uploads/2023/03/Virginia-self-employment-tax.webp" alt="adbz" className="student-avathar" />
          </td>
          <td>526987341</td>
          
        </tr>
        <tr className="align-middle">
        <td><span className="Pass">✅ناجح</span></td>
        <td>76/100</td>
        <td>احمد</td>
        <td>امتحان ثاني</td>
          
          <td>
            <img src="https://trybeem.com/blog/wp-content/uploads/2023/03/Virginia-self-employment-tax.webp" alt="adbz" className="student-avathar" />
          </td>
          <td>526987341</td>
        </tr>
        <tr className="align-middle">
        <td><span className="failed"> ❌راسب</span></td>
        <td>42/100</td>
        <td>احمد</td>
        <td>امتحان ثالث</td>
          
          <td>
            <img src="https://trybeem.com/blog/wp-content/uploads/2023/03/Virginia-self-employment-tax.webp" alt="adbz" className="student-avathar" />
          </td>
          <td>526987341</td>
        </tr>
        <tr className="align-middle">
        <td><span className="Pass">✅ناجح</span></td>
        <td>100/100</td>
        <td>احمد</td>
        <td>امتحان نهائي</td>
          
          <td>
            <img src="https://trybeem.com/blog/wp-content/uploads/2023/03/Virginia-self-employment-tax.webp" alt="adbz" className="student-avathar" />
          </td>
          <td>526987341</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</div>

</section>



 <div className='MoreMark'>
     <Label style={{fontSize:'22px',fontWeight:'600' , cursor:'pointer'}}>علامات الوظائف</Label>
     <a href="#" className='More' onClick={toggleTableVisibility}>
          {isTableVisible ? '-' : '+'}
     </a>
</div>

</div>

</div>
);
};
export default Marks;
