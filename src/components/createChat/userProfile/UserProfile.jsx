import React, { Component } from "react";
import "./userProfile.css";
import { PsychologyTwoTone } from "@mui/icons-material";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
            <div>
          <div style={{width:'90px',height:'90px'}} className="profile__image">
            <img  src="src/assets/me.png" />
          </div>
          </div>
          <h4>جبر دراوشة</h4>
          <h1 style={{fontWeight:"bold", fontSize:'15px'}}> مدرسة عورتا الثانية الفرع علمي</h1>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}