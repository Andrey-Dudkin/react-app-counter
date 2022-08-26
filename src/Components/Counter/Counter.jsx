import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
  const [temperature,setTemperature] = useState(10)
  const [color,setColor] = useState("chilly")

  function plusTemperature(){
    if(temperature === 45) return;

    const newTemperature = temperature + 1;
    if(newTemperature >= -15){
      setColor("very_cold")
    }
    if(newTemperature >= -10){
      setColor("cold")
    }
    if(newTemperature >= 0){
      setColor("chilly")
    }
    if(newTemperature >= 20){
      setColor("warm")
    }
    if(newTemperature >= 30){
      setColor("hot")
    }
    setTemperature(newTemperature)
  }

  function minusTemperature(){
    if(temperature === -35) return;

    const newTemperature = temperature - 1;

    if(newTemperature <= 30){
      setColor("warm")
    }
    if(newTemperature <= 20){
      setColor("chilly")
    }
    if(newTemperature <= 10){
      setColor("cold")
    }
    if(newTemperature <= 0){
      setColor("very_cold")
    }
    if(newTemperature <= -15){
      setColor("crazy_cold")
    }
    setTemperature(newTemperature)
  }
  
  return (
    <div className='counter'>
      <h2 className="title">temperature degree counter</h2>
      <div className="app-counter">
          <div className="temperature-display-container">
            <div className={`temperature-display ${color}`}>&#176;{temperature}С</div>
          </div>
          <div className="button-container">
            <button onClick={() => plusTemperature()}>+</button>
            <button onClick={() => minusTemperature()}>-</button>
          </div>
      </div>
    </div>
  )
 
}

export default Counter