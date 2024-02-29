import React, { Component } from "react";
import './chatList.css'
import ChatListItems from "./ChatListItems";
import '@fortawesome/fontawesome-free/css/all.css';


export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://media.istockphoto.com/id/1224269567/vector/cartoon-boy-with-big-pencil.jpg?s=170667a&w=0&k=20&c=xpDzGmJoFuVfMRnxYupRQYzRck784yISQiW4jMJBLxs=",
      id: 1,
      name: "تيم محمد",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://th.bing.com/th/id/R.acabe09695613a9a3cbcd03ec7731490?rik=ZPWeksAc3%2bw%2f7A&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fboy-clipart-transparent%2fboy-clipart-transparent-2.png&ehk=bUELxOs%2f%2bjmOVyj%2bSTVP71vFwIvH%2fUuu%2fLiN%2fVceIos%3d&risl=&pid=ImgRaw&r=0",
      id: 3,
      name: "فادي احمد",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/cartoon-little-boy-waving-hands-illustration-96721022.jpg",
      id: 4,
      name: "الين الين",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/cute-boy-cartoon-character-wearing-cap-white-background-illustration-248418545.jpg",
      id: 5,
      name: "اليسا احمد",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://image.freepik.com/free-vector/happy-boy-wearing-jacket-white_1308-38726.jpg",
      id: 6,
      name: "فارس ماهر ",
      active: false,
      isOnline: true,
    },
    {
      image: "https://image.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-41300.jpg",
      id: 10,
      name: "مراد مراد",
      active: false,
      isOnline: true,
    },
    {
      image: "https://image.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-41300.jpg",
      id: 10,
      name: " فرح فرح ",
      active: false,
      isOnline: true,
    },
    {
      image: "https://image.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-41300.jpg",
      id: 10,
      name: " مرح مرح",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2 style={{marginBottom:'11px',margin:'auto',fontSize:'25px'}}>دردشات</h2>
        </div>

        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}