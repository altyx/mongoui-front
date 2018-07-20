import React from "react";
import './data.css';
const DisplayData = (props) => {
  return (
    <div>
        {
          props.data.map(e => (
            <div className='keys' key={e[props.keys]}>
              {props.keys.map(t => (
                <span className="key" key={t}>{e[t]}</span>
              ))}
            </div>
          ))
        }
    </div>
  )
}

export default DisplayData;