import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.profileImg}>
                <img width="1000px"
                    height="250px"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="Mountains" />
            </div>
            <div className={s.profileDescr}>Eziz Muhammedkulyyev</div>
        </div>)
}

export default ProfileInfo;