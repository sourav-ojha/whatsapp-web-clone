import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './css/SidebarChats.css'

function SidebarChats({addNewChat}) {
    const [seed, setSeed] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [] );

    const createChat = () => {
        const roomName = prompt("Plaease Enter name for chat");

        if (roomName) {
            // db stuff
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add New Chat</h2>
        </div>
    )
}
export default SidebarChats
