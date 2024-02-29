import React from 'react'
import './StudentDetailes.css'




function StudentDetailes() {


  return (
    <>
    <div className="container">
  <div id="user-profile-2" className="user-profile">
    <div className="tabbable">
      <ul className="nav nav-tabs padding-18">
        <li className="active">
          <a data-toggle="tab" href="#home">
            <i className="green ace-icon fa fa-user bigger-120" />
            Profile
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#feed">
            <i className="orange ace-icon fa fa-rss bigger-120" />
            Activity Feed
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#friends">
            <i className="blue ace-icon fa fa-users bigger-120" />
            Friends
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#pictures">
            <i className="pink ace-icon fa fa-picture-o bigger-120" />
            Pictures
          </a>
        </li>
      </ul>
      <div className="tab-content no-border padding-24">
        <div id="home" className="tab-pane in active">
          <div className="row">
            <div className="col-xs-12 col-sm-3 center">
              <span className="profile-picture">
                <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="src\assets\me.png" />
              </span>
              <div className="space space-4" />
              <a href="#" className="btn btn-sm btn-block btn-success">
                <i className="ace-icon fa fa-plus-circle bigger-120" />
                <span className="bigger-110">Add as a friend</span>
              </a>
              <a href="#" className="btn btn-sm btn-block btn-primary">
                <i className="ace-icon fa fa-envelope-o bigger-110" />
                <span className="bigger-110">Send a message</span>
              </a>
            </div>{/* /.col */}
            <div className="col-xs-12 col-sm-9">
              <h4 className="blue">
                <span className="middle">John Doe</span>
                <span className="label label-purple arrowed-in-right">
                  <i className="ace-icon fa fa-circle smaller-80 align-middle" />
                  online
                </span>
              </h4>
              <div className="profile-user-info">
                <div className="profile-info-row">
                  <div className="profile-info-name"> Username </div>
                  <div className="profile-info-value">
                    <span>alexdoe</span>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name"> Location </div>
                  <div className="profile-info-value">
                    <i className="fa fa-map-marker light-orange bigger-110" />
                    <span>Netherlands</span>
                    <span>Amsterdam</span>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name"> Age </div>
                  <div className="profile-info-value">
                    <span>38</span>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name"> Joined </div>
                  <div className="profile-info-value">
                    <span>2010/06/20</span>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name"> Last Online </div>
                  <div className="profile-info-value">
                    <span>3 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="hr hr-8 dotted" />
              <div className="profile-user-info">
                <div className="profile-info-row">
                  <div className="profile-info-name"> Website </div>
                  <div className="profile-info-value">
                    <a href="#" target="_blank">www.alexdoe.com</a>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name">
                    <i className="middle ace-icon fa fa-facebook-square bigger-150 blue" />
                  </div>
                  <div className="profile-info-value">
                    <a href="#">Find me on Facebook</a>
                  </div>
                </div>
                <div className="profile-info-row">
                  <div className="profile-info-name">
                    <i className="middle ace-icon fa fa-twitter-square bigger-150 light-blue" />
                  </div>
                  <div className="profile-info-value">
                    <a href="#">Follow me on Twitter</a>
                  </div>
                </div>
              </div>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /#home */}
        <div id="feed" className="tab-pane">
          <div className="profile-feed row">
            <div className="col-sm-6">
              <div className="profile-activity clearfix">
                <div>
                  <img className="pull-left" alt="Alex Doe's avatar" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                  <a className="user" href="#"> Alex Doe </a>
                  changed his profile photo.
                  <a href="#">Take a look</a>
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    an hour ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <img className="pull-left" alt="Susan Smith's avatar" src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                  <a className="user" href="#"> Susan Smith </a>
                  is now friends with Alex Doe.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    2 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-check btn-success no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  joined
                  <a href="#">Country Music</a>
                  group.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    5 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-picture-o btn-info no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  uploaded a new photo.
                  <a href="#">Take a look</a>
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    5 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <img className="pull-left" alt="David Palms's avatar" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                  <a className="user" href="#"> David Palms </a>
                  left a comment on Alex's wall.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    8 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-pencil-square-o btn-pink no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  published a new blog post.
                  <a href="#">Read now</a>
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    11 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <img className="pull-left" alt="Alex Doe's avatar" src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                  <a className="user" href="#"> Alex Doe </a>
                  upgraded his skills.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    12 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-key btn-info no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  logged in.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    12 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-power-off btn-inverse no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  logged out.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    16 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
              <div className="profile-activity clearfix">
                <div>
                  <i className="pull-left thumbicon fa fa-key btn-info no-hover" />
                  <a className="user" href="#"> Alex Doe </a>
                  logged in.
                  <div className="time">
                    <i className="ace-icon fa fa-clock-o bigger-110" />
                    16 hours ago
                  </div>
                </div>
                <div className="tools action-buttons">
                  <a href="#" className="blue">
                    <i className="ace-icon fa fa-pencil bigger-125" />
                  </a>
                  <a href="#" className="red">
                    <i className="ace-icon fa fa-times bigger-125" />
                  </a>
                </div>
              </div>
            </div>{/* /.col */}
          </div>{/* /.row */}
          <div className="space-12" />
          <div className="center">
            <button type="button" className="btn btn-sm btn-primary btn-white btn-round">
              <i className="ace-icon fa fa-rss bigger-150 middle orange2" />
              <span className="bigger-110">View more activities</span>
              <i className="icon-on-right ace-icon fa fa-arrow-right" />
            </button>
          </div>
        </div>{/* /#feed */}
        <div id="friends" className="tab-pane">
          <div className="profile-users clearfix">
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Bob Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-online" />
                      Bob Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Content Editor</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 orange" />
                      <span className="green"> 20 mins ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Rose Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-offline" />
                      Rose Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Graphic Designer</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 grey" />
                      <span className="grey"> 30 min ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Jim Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-busy" />
                      Jim Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">SEO &amp; Advertising</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 red" />
                      <span className="grey"> 1 hour ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Alex Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-idle" />
                      Alex Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Marketing</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 orange" />
                      <span className> 40 minutes idle </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Phil Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-online" />
                      Phil Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Public Relations</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 orange" />
                      <span className="green"> 2 hours ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Susan Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-online" />
                      Susan Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">HR Management</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 orange" />
                      <span className="green"> 20 mins ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Jennifer Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-offline" />
                      Jennifer Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Graphic Designer</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 grey" />
                      <span className="grey"> 2 hours ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemdiv memberdiv">
              <div className="inline pos-rel">
                <div className="user">
                  <a href="#">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Alexa Doe's avatar" />
                  </a>
                </div>
                <div className="body">
                  <div className="name">
                    <a href="#">
                      <span className="user-status status-offline" />
                      Alexa Doe
                    </a>
                  </div>
                </div>
                <div className="popover">
                  <div className="arrow" />
                  <div className="popover-content">
                    <div className="bolder">Accounting</div>
                    <div className="time">
                      <i className="ace-icon fa fa-clock-o middle bigger-120 grey" />
                      <span className="grey"> 4 hours ago </span>
                    </div>
                    <div className="hr dotted hr-8" />
                    <div className="tools action-buttons">
                      <a href="#">
                        <i className="ace-icon fa fa-facebook-square blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-twitter-square light-blue bigger-150" />
                      </a>
                      <a href="#">
                        <i className="ace-icon fa fa-google-plus-square red bigger-150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hr hr10 hr-double" />
          <ul className="pager pull-right">
            <li className="previous disabled">
              <a href="#">← Prev</a>
            </li>
            <li className="next">
              <a href="#">Next →</a>
            </li>
          </ul>
        </div>{/* /#friends */}
        <div id="pictures" className="tab-pane">
          <ul className="ace-thumbnails">
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" data-rel="colorbox">
                <img alt="150x150" src="https://www.bootdey.com/image/200x200/" />
                <div className="text">
                  <div className="inner">Sample Caption on Hover</div>
                </div>
              </a>
              <div className="tools tools-bottom">
                <a href="#">
                  <i className="ace-icon fa fa-link" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-paperclip" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-pencil" />
                </a>
                <a href="#">
                  <i className="ace-icon fa fa-times red" />
                </a>
              </div>
            </li>
          </ul>
        </div>{/* /#pictures */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default StudentDetailes
