import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "./Sidebar.css";
import { DonutLarge, MoreVert, Search } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__header__icons">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search__searchcontainer">
          <Search />
          <input
            type="text"
            name="chat_search"
            id="chat_search"
            placeholder="Enter you text"
          />
        </div>
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}
