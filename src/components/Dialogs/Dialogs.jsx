import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return <NavLink to={'/dialogs/' + props.id}>{props.name}<br /></NavLink>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Vika Valenis' },
        { id: 2, name: 'Roma Conea' },
        { id: 3, name: 'Kirill Kotlyar' },
        { id: 4, name: 'Katya Müller' },
        { id: 5, name: 'Aman Bucky' },
        { id: 6, name: 'Shageldi Chary' }
    ]

    let messagesData = [
        { id: 1, message: 'Vika hey, hi!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' }
    ]

    let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messages = messagesData.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogs}</div>
            <div className={s.messages}>{messages}</div>
        </div>
    )
}

export default Dialogs;