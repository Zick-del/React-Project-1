import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.feed}>My posts
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message="Hi, it's Eziz" time="23:47"/>
                <Post message="It's my first message" likes="2"/>
            </div>
        </div>
    )
}

export default MyPosts;