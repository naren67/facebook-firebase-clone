import React, { useEffect, useState } from "react";
import "./Feeds.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from './Post.js'
//first import the db from firebase
import db from './firebase.js'

function Feeds() {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
          id:doc.id, data:doc.data()
      })))
    )
  },[])


  return (
    <div className="feeds">
      <StoryReel />
      <MessageSender />

      {/* <Post
      profilePic= {posts.data.profilePic} 
      name='naren'
      messageSent ='yo whats up mate'
      picSent='http://placeimg.com/640/360/any'
      /> */}

      {posts.map((post)=>(
        <Post
        key={post.id}
        timestamp = {post.data.timestamp}
        profilePic= {post.data.profilePic} 
        name= {post.data.name}
        messageSent = {post.data.messageSent}
        picSent= {post.data.picSent}
        />
      ))}

    </div>
  );
}

export default Feeds;
