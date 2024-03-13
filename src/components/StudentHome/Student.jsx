import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import './StudentHome.css'



function Student() {

    useEffect(() => {
        // Toggle Active State on Side Menu Click
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    
        allSideMenu.forEach((item) => {
          const li = item.parentElement;
          item.addEventListener('click', function () {
            allSideMenu.forEach((i) => {
              i.parentElement.classList.remove('active');
            });
            li.classList.add('active');
          });
        });
    
        // Toggle Sidebar
        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        const sidebar = document.getElementById('sidebar');
    
        menuBar.addEventListener('click', function () {
          sidebar.classList.toggle('hide');
        });
    
        // Toggle Search Form
        const searchButton = document.querySelector('#content nav form .form-input button');
        const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
        const searchForm = document.querySelector('#content nav form');
    
        searchButton.addEventListener('click', function (e) {
          if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
              searchButtonIcon.classList.replace('bx-search', 'bx-x');
            } else {
              searchButtonIcon.classList.replace('bx-x', 'bx-search');
            }
          }
        });
    
        // Hide Sidebar on Window Resize
        if (window.innerWidth < 768) {
          sidebar.classList.add('hide');
        } else if (window.innerWidth > 576) {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
          searchForm.classList.remove('show');
        }
    
        window.addEventListener('resize', function () {
          if (this.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
          }
        });
    
        // Dark Mode Toggle
        const switchMode = document.getElementById('switch-mode');
    
        switchMode.addEventListener('change', function () {
          if (this.checked) {
            document.body.classList.add('dark');
          } else {
            document.body.classList.remove('dark');
          }
        });
      }, []); // Empty dependency array to run only once on component mount
    

  return (
    <>
        <div>
  <section id="sidebar">
    
     
      
      


    
    <ul className="side-menu top">
      <li className="active">
        <Link to="/">
          <i className="bx bxs-dashboard" />
          <span style={{fontSize:'21px'}} className="text">الصفحة الرئيسية</span>
        </Link>
      </li>
      <li>
        <Link to="/StudentSchedule">
          <i className="bx bxs-calendar" />
          <span style={{fontSize:'21px'}} className="text">برنامجي</span>
        </Link>
      </li>
      <li>
        <Link to="/StudentExams">
          <i className="bx bxs-doughnut-chart" />
          <span style={{fontSize:'21px'}} className="text">امتحاناتي</span>
        </Link>
      </li>
      <li>
        <Link to="">
          <i className="bx bxs-happy" />
          <span style={{fontSize:'21px'}} className="text">العلامات اليومية</span>
        </Link>
      </li>
      <li>
        <Link to="/Board">
          <i className="bx bxs-bell-ring" />
          <span style={{fontSize:'21px'}} className="text">لوحة الاعلانات</span>
        </Link>
      </li>
      <li>
        <Link to="">
          <i className="bx bxs-notepad" />
          <span style={{fontSize:'21px'}} className="text">ادوات تساعدك على الدراسة</span>
        </Link>
      </li>
    
    </ul>
    <ul className="side-menu">
      <li>
        <Link to="/Settings">
          <i className="bx bxs-cog" />
          <span style={{fontSize:'21px'}} className="setset">الاعدادات</span>
        </Link>
      </li>
      <li>
        <Link to="/Welcome" className="logout">
          <i className="bx bxs-log-out" />
          <span style={{fontSize:'21px'}} className="text">مغادرة</span>
        </Link>
      </li>
    </ul>
  </section>
  {/* SIDEBAR */}
  {/* CONTENT */}
  <section id="content">
    {/* NAVBAR */}
    <nav>
      <i className="bx bx-menu" />
      <form  action="#">
        <div style={{display:'none'}} className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
        </div> 
        </form>

      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode" />
      <Link to="/Notification" className="notification">
        <i style={{fontSize:'30px'}} className="bx bxs-bell" />
        <span className="num">2</span>
      </Link>
      <Link to="/ChatApplication" className="notification">
        <i style={{fontSize:'30px'}} className="bx bx-chat" />
        <span className="num">1</span>
      </Link>
       

      <a href="#" className="profile">
        <img style={{width:'45px', height:'45px'}} src="src\assets\me.png" />
      </a>


    </nav>
    {/* NAVBAR */}
    {/* MAIN */}

    <main>
      <div className="head-title">
        <div className="left">
         
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i className="bx bx-chevron-right" /></li>
            <li>
              <a className="active" href="#">الصفحة الرئيسية</a>
            </li>
          </ul>
        </div>
        
      </div>


     
    </main>
  </section>
</div>


    </>
  )
}

export default Student
