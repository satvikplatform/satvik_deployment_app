import React, { useState } from 'react'

const Demo = () => {
  const [color, setColor] = useState("white");

  const colorHandler = () => {
    setColor((prevState) => {return prevState === "white"?"black" : "white"});
  }
  return (
    <div style={{backgroundColor:color}} className='border-2 h-screen'>
        <h1 className='text-3xl font-bold text-orange-400 m-4'>Hello Satvik</h1>
        <button onClick={colorHandler} className='border-2 border-orange-800 m-4 p-2 rounded-lg bg-blue-900 text-orange-400'>Change Background Color</button>
    </div>
  )
}

export default Demo