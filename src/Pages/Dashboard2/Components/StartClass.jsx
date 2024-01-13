import React, { useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Room from './Room'

function StartClass() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/room/:roomId' element={<Room/>}></Route>
      </Routes>
    </>

  )
}

function Home() {
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate();

  function handleJoin(){
    navigate(`/room/${roomId}`)
  }
  return (
    <main>
      <h1>Class App</h1>
      <input type="text" 
      placeholder='Enter room id'
      value={roomId}
      onChange={e => setRoomId(e.target.value)}
      required
      />
    <button onClick={handleJoin}>Join now</button>
    </main>
  )
}

export default StartClass