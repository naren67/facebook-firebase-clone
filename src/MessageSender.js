import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useStateValue } from "./StateProvider";

//import firebase db from file and firebase
import db from './firebase.js'
import firebase from 'firebase'

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      messageSent : input,
      picSent : imageInput,
      profilePic : user.photoURL,
      name : user.displayName,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })         

    setInput('')
    setImageInput('')
  };

  const [input, setInput] = useState("");
  const [imageInput, setImageInput] = useState('')

  const inputHandler = (e)=>{
    setInput(e.target.value)
  }

  const imageInputHandler = (e)=>{
    setImageInput(e.target.value)
  }

  const [{user}, dispatch] = useStateValue()

  console.log(input,imageInput)

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={inputHandler}
            className="left_input"
            type="text"
            placeholder= {`whats on your mind ,${user.displayName}`}
          />
          <input
          value={imageInput}
          onChange={imageInputHandler}
            className="right_input"
            type="text"
            placeholder="image URL"
          />
          <button onClick={handleSubmit} type="submit">
            hiden sumit button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="bottom__option">
          <LiveTvOutlinedIcon style={{ fontSize: 35, color: "red" }} />
          <p>Go Live</p>
        </div>
        <div className="bottom__option">
          <AddPhotoAlternateOutlinedIcon
            style={{ fontSize: 35, color: "green" }}
          />
          <p>Photos and Videos</p>
        </div>
        <div className="bottom__option">
          <EmojiEmotionsOutlinedIcon
            style={{ fontSize: 35, color: "yellow" }}
          />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
