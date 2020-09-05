import React from "react";

import BottomMenu from "../BottomMenu";
import "./style.css";

const Layout = ({ children }) => {
  const data = {
    bottom_menu: [
      {
        id: 1,
        title: "Home",
        link: "/",
        img: "house.png",
        txt: "홈",
      },
      { id: 2, title: "Menu", link: "/menu", img: "menu.png", txt: "커뮤니티" },
      {
        id: 3,
        title: "Writing",
        link: "/writing",
        img: "edit.png",
        txt: "지도",
      },
      {
        id: 4,
        title: "MyPage",
        link: "/mypage",
        img: "avatar.png",
        txt: "프로필",
      },
    ],
  };
  return (
    <div className="Layout">
      <div className="App-page">{children}</div>
      <BottomMenu className="App-menu" data={data.bottom_menu}></BottomMenu>
    </div>
  );
};

export default Layout;