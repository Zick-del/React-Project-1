import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to="/profile"
                    s={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to="/dialogs"
                    s={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to=' '
                    s={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to=' '
                    s={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink
                    to=' '
                    s={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }}>Settings</NavLink>
            </div>
        </nav>

    )
}

export default Navbar;