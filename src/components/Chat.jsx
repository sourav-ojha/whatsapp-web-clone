import { IconButton, Avatar } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./css/Chat.css";

function Chat() {

  const [seed, setSeed] = useState(0);
    const[input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) =>{
      e.preventDefault();
      setInput('')
      console.log('input', input);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header__info">
          <h3>Room Name</h3>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat__header__right">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">sourav ojha</span>
          hii guys
          <span className="chat__timestamp">10.31am</span>
        </p>
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">sourav ojha</span>
          hii guys
          <span className="chat__timestamp">10.31am</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form onSubmit={sendMessage}>
          <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
