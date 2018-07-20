import React from "react";
import './data.css';

const Keys = (props) => {
  return (
    <div className='keys'>
       {props.keys.map(key => (
          <span className="key" key={key}>{key}</span>
        ))}
    </div>
  )
}

export default Keys;