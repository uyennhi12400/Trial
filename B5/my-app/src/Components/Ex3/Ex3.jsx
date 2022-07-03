import React, { useState } from 'react'
import '../Ex3/Style3.css'

const Ex3 = () => {
    const [shape, setShape] = useState('round')
    const handleShape = () => {
        setShape(shape === 'round'? 'rec' : 'round')
    }
  return (
    <div>
        <button onClick={handleShape}> Change Shape</button>
          <div>
            <span className = {shape}></span>
            </div> 
    </div>
  )
}

export default Ex3