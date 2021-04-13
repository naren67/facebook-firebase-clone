import { Avatar } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
  
  return (
    <div className="sidebarRow">
      {src && (
        <Avatar
          className="sidebarRow__icon"
          src={src}
          style={{ fontSize: 35 }}
        />
      )}
      {Icon && <Icon style={{ fontSize: 35 }} className="sidebarRow__icon" />}

      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
