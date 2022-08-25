import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
  const [counter,setCounter] = useState(0)
  // if(setCounter(counter <= 0)){
  //   return <button className='btn_counter' disabled={true}>-</button>
  // }
  return (
    <div className='counter'>
      <h1 className="title"> App counter</h1>
      <h2 className="number_color">{counter}</h2>
      <button className='btn_counter'onClick={() => {setCounter(counter +1)}}>+</button>
      <button className='btn_counter'onClick={() => {setCounter(counter -1)}}>-</button>
      <button className='btn_counter'onClick={() => {setCounter(0)}}>reset</button>
    </div>
  )
 
}

export default Counter