import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import Mic from '@mui/icons-material/Mic';
import './Chat.css'

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>> ", input);
    setInput("");
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className='chat__name'>
            Sean Says:
          </span>
          Hey Guys
          <span className='chat__timestamp'>
            4:20pm
          </span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type='text' />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat