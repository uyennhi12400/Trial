import React, { useState } from 'react'
import '../Ex2/Style2.css'

const shape = ['blue','red','yellow','orange','violet','indigo','pink']

const Ex2 = () => {
  const [color, setColor] = useState(0)
  const handleColor = () => {
    setColor(color === 6 ? 0 : color + 1);
}
  return (
    <div>
        <button onClick={handleColor}>Change Color</button><br/>
        {shape.map((element,index) => (
            <span key={index} className = {`color ${index === color && element}`}> </span>
        ))}
    </div>
  )
}

export default Ex2