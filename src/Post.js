import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { useStateValue } from './StateProvider';

function Post({profilePic, name, timestamp, messageSent, picSent}) {

       const [{user}, dispatch] = useStateValue()

          return (
                    <div className='post'>
                              <div className="post__top">
                                        <div className="post__pic">
                                                  <Avatar src={profilePic}/>
                                        </div>
                                        <div className="post__nameTime">
                                                  <p className='post__name'>{name}</p>
                                                  <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                                        </div>

                              </div>
                              <div className="post__bottom">
                                        <p>{messageSent}</p>
                                        <img src={picSent} alt=""/>
                              </div>
                              <div className="post_likeShareComment">
                                        <div className="like">
                                               <ThumbUpAltOutlinedIcon style={{fontSize:28}}/>
                                               <p>Like</p>
                                        </div>
                                        <div className="comment">
                                        <QuestionAnswerOutlinedIcon style={{fontSize:28}}/>
                                               <p>Comment</p>
                                        </div>
                                        <div className="share">
                                        <ShareOutlinedIcon style={{fontSize:28}}/>
                                               <p>Share</p>
                                        </div>
                              </div>
                    </div>
          )
}

export default Post
