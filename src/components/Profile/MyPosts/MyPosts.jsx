import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        { id: 1, message: "Hi, it's Eziz", time: "23:47", likes: 17 },
        { id: 2, message: "It's my first message", time: "15:00", likes: 2 }
    ]

    let posts = postsData
        .map(p => <Post message={p.message} time={p.time} likes={p.likes} />)

    return (
        <div className={s.feed}>My posts
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;