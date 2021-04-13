import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GradeIcon from "@material-ui/icons/Grade";
import EventIcon from "@material-ui/icons/Event";
import UpdateIcon from "@material-ui/icons/Update";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {

  const [{user}, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <SidebarRow src= {user.photoURL} title= {user.displayName} />
      <SidebarRow Icon={EventNoteIcon} title="Events" />
      <SidebarRow Icon={GradeIcon} title="Favourites" />
      <SidebarRow Icon={EventIcon} title="Calender" />
      <SidebarRow Icon={UpdateIcon} title="Memories" />
      <SidebarRow Icon={BookmarksIcon} title="Saved" />
      <SidebarRow Icon={GroupWorkIcon} title="Movies" />
      <SidebarRow Icon={VideogameAssetIcon} title="Games" />
      <SidebarRow Icon={ArrowDropDownCircleOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
