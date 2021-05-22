import { IconButton, Avatar } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../services/firebase";
import "./css/Chat.css";
import firebase from "firebase";
import { useStateValue } from "../helpers/StateProvider";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState(0);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((onSnapshot) => setRoomName(onSnapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    console.log("input", input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header__info">
          <h3> {roomName} </h3>
          <p>Last Seen at {" "} 
            {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()} 
            
                    
            </p>
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
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}
          >
            <span className="chat__name"> {message.name} </span>
            {message.message}
            <span className="chat__timestamp">
              {" "}
              {new Date(message.timestamp?.toDate()).toUTCString()}{" "}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
