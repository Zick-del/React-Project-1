import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}><NavLink to="/profile">Profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={style.item}><NavLink to=' '>News</NavLink></div>
            <div className={style.item}><NavLink to=' '>Music</NavLink></div>
            <div className={style.item}><NavLink to=' '>Settings</NavLink></div>
        </nav>

    )
}

export default Navbar;