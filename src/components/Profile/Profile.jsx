import React from "react";
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div>
                <img width="1000px"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="Mountains" />
            </div>
            <div>ava + descr</div>
            <MyPosts />
        </div>
    )
}

export default Profile;