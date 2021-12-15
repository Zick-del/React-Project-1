import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div><DialogItem name="Vika Valenis" id="1" /></div>
                <div><DialogItem name="Roma Conea" id="2" /></div>
                <div><DialogItem name="Kirill Kotlyar" id="3" /></div>
                <div><DialogItem name="Katya Müller" id="4" /></div>
                <div><DialogItem name="Aman Bucky" id="5" /></div>
                <div><DialogItem name="Shageldi Chary" id="6" /></div>
            </div>

            <div className={s.messages}>
                <Message message='Hey, hi!' />
                <Message message='How are you doing?' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>

        </div>
    )
}

export default Dialogs;