import React from 'react'
import '../Ex1/Style1.css'

const arr = [1,2,1,2,1,2]
const Ex1 = () => {
  return <div className="shape-container">
    {arr.map((number,index) => (
     <div>
        <span className = {`light ${(index % 2 === 0) && 'active'}`} > </span>
     </div>
    ))}
    </div>
};

export default Ex1