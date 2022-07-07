import React from 'react'
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />

      </div>

      <div className='sidebar__search'>
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />

      </div>

      <div className='sidebar__chats'>

      </div>
    </div>
  )
}

export default Sidebar