import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  return (
  <div
  className='background'
   style={{backgroundColor: color}} 
  >
    <div className='screen'>
    <div>
        <button 
        onClick={() => setcolor("black")}
        className='bg-black text-light rounded'>
          black
          </button>
        <button 
        onClick={() => setcolor("yellow")}
        className='yellow text-dark text-light rounded'>
          yellow
          </button>
        <button 
        onClick={() => setcolor("green")}
        className='bg-success text-light rounded'>
          green</button>
        <button 
        onClick={() => setcolor("red")}
        className='bg-danger text-light rounded px-3'>
          red</button>
        <button 
        onClick={() => setcolor("gray")}
        className='bg-dark  text-light rounded px-2'>
          gray</button>
        <button
        onClick={() => setcolor("pink")} 
        className='bg-pink-500 text-light rounded px-2'>
          pink</button>
          <button 
        onClick={() => setcolor("brown")}
        className='bg-brown  text-light rounded px-2'>
          brown</button>
        <button
        onClick={() => setcolor("orange")} 
        className='bg-orange text-light rounded px-2'>
          orange</button>
      </div>
    </div>
   </div> 
  )
}

export default App
