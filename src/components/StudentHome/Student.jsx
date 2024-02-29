import React ,{useEffect,useState} from 'react'
import './StudentHome.css'



 function Student() {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
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
  
      const menuBar = document.querySelector('#content nav .bx.bx-menu');
      const sidebar = document.getElementById('sidebar');
  
      menuBar.addEventListener('click', function () {
        setIsSidebarHidden(!isSidebarHidden);
      });
  
      const searchButton = document.querySelector('#content nav form .form-input button');
      const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
      const searchForm = document.querySelector('#content nav form');
  
      searchButton.addEventListener('click', function (e) {
        if (window.innerWidth < 576) {
          e.preventDefault();
          setIsSearchFormVisible(!isSearchFormVisible);
          if (isSearchFormVisible) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
          } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
          }
        }
      });
  
      if (window.innerWidth < 768) {
        setIsSidebarHidden(true);
      } else if (window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        setIsSearchFormVisible(false);
      }
  
      window.addEventListener('resize', function () {
        if (this.innerWidth > 576) {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
          setIsSearchFormVisible(false);
        }
      });
  
      const switchMode = document.getElementById('switch-mode');
  
      switchMode.addEventListener('change', function () {
        setIsDarkMode(this.checked);
      });
    }, [isSearchFormVisible, isSidebarHidden]);
  return (
    <>
        <div>
  <section id="sidebar">
    <a href="#" className="brand">
      <i className="bx bxs-smile" />
      <span className="text">AdminHub</span>
    </a>
    <ul className="side-menu top">
      <li className="active">
        <a href="#">
          <i className="bx bxs-dashboard" />
          <span className="text">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt" />
          <span className="text">My Store</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-doughnut-chart" />
          <span className="text">Analytics</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-message-dots" />
          <span className="text">Message</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-group" />
          <span className="text">Team</span>
        </a>
      </li>
    </ul>
    <ul className="side-menu">
      <li>
        <a href="#">
          <i className="bx bxs-cog" />
          <span className="text">Settings</span>
        </a>
      </li>
      <li>
        <a href="#" className="logout">
          <i className="bx bxs-log-out-circle" />
          <span className="text">Logout</span>
        </a>
      </li>
    </ul>
  </section>
  {/* SIDEBAR */}
  {/* CONTENT */}
  <section id="content">
    {/* NAVBAR */}
    <nav>



    <i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
      <form action="#">
        <div style={{display:'none'}} className="form-input">

          <input type="search" placeholder="Search..." />

          <button type="submit" className="search-btn">
            <i className="bx bx-search" />
            </button>
        </div> 

        </form>

      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode" />
      <a href="#" className="notification">
        <i style={{fontSize:'30px'}} className="bx bxs-bell" />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img style={{width:'45px',height:'45px'}} src="src\assets\me.png" />
      </a>
    </nav>
    {/* NAVBAR */}
    {/* MAIN */}
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i className="bx bx-chevron-right" /></li>
            <li>
              <a className="active" href="#">Home</a>
            </li>
          </ul>
        </div>
        
      </div>
      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check" />
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group" />
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status process">Process</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
            <i className="bx bx-plus" />
            <i className="bx bx-filter" />
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
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
