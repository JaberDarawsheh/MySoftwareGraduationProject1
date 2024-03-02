import React, { Component, useState, createRef, useEffect } from "react";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import './chatContent.css'


export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "src/assets/me.png",
      type: "",
      msg: "مرحبا",
    },
    {
      key: 2,
      image:
        "https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs=",
      type: "other",
      msg: "الحمد لله تمام ",
    },
    {
      key: 3,
      image:
        "https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs=",
      type: "other",
      msg: "انت كيفك",
    },
    {
      key: 4,
      image:
        "src/assets/me.png",
      type: "",
      msg: "انا بخير",
    },
    {
      key: 5,
      image:
        "https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs=",
      type: "other",
      msg: "شو عندك اليوم",
    },
    {
      key: 6,
      image:
        "src/assets/me.png",
      type: "",
      msg: "ما عندي شي",
    },
    {
      key: 7,
      image:
        "https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs=",
      type: "other",
      msg: "معناته بنطلع طلعة مرتبة اليوم",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://i.pinimg.com/originals/f0/e8/d7/f0e8d7f750538c4a5c7b92f2afaeb384.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs="
              />
              <p style={{fontSize:'19px'}}>تيم احمد</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
              <i className="fas fa-video"></i>
              </button>
              <button className="btn-nobg">
              <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
          
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>

        <div className="content__footer">
          <div className="sendNewMessage">

            <button style={{position:'relative'}} className="addFiles">
              <i className="fa fa-plus"></i>
            </button>

            <input
              style={{textAlign:'center' , fontSize:'20px'}}
              type="text"
              placeholder="...اكتب رسالة"
              onChange={this.onStateChange}
              value={this.state.msg}
            />

            <button style={{position:'relative'}} className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>

          </div>
        </div>
        
      </div>
    );
  }
}