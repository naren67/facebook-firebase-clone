import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
// import IconButton from "@material-ui/core/IconButton";

function Header() {

  const [{user}, dispatch] = useStateValue()
  console.log(user)
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header__search">
          <div className="header__searchIcon">
            <SearchIcon fontSize="large" style={{ fontSize: 28 }} />
          </div>
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__icon m_icon">
          <HomeIcon fontSize="large" style={{ fontSize: 30 }} />
        </div>
        <div className="header__icon m_icon">
          <PeopleAltIcon fontSize="large" style={{ fontSize: 30 }} />
        </div>
        <div className="header__icon m_icon">
          <OndemandVideoIcon fontSize="large" style={{ fontSize: 30 }} />
        </div>
        <div className="header__icon m_icon">
          <AccountBalanceIcon fontSize="large" style={{ fontSize: 30 }} />
        </div>
        <div className="header__icon m_icon">
          <GroupAddIcon fontSize="large" style={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="header__right">
        <div className="header__icon">
          <Avatar src={user.photoURL} fontSize="large" style={{ fontSize: 36 }} />
          <p>{user.displayName}</p>
        </div>
        <div className="header__icon r_icon">
          <AddIcon fontSize="large" style={{ fontSize: 20 }} />
        </div>
        <div className="header__icon r_icon">
          <GroupAddIcon fontSize="large" style={{ fontSize: 20 }} />
        </div>
        <div className="header__icon r_icon">
          <ChatBubbleRoundedIcon fontSize="large" style={{ fontSize: 20 }} />
        </div>
        <div className="header__icon r_icon">
          <NotificationsRoundedIcon fontSize="large" style={{ fontSize: 20 }} />
        </div>
        <div className="header__icon r_icon">
          <ArrowDropDownRoundedIcon fontSize="large" style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
