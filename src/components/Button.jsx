import React from 'react'

function Button(props) {
  // console.log("clickedd");
  return (
    <div >
        <button className='bg-blue-300 text-black' onClick={props.onClick}
        > {props.value}</button>
    </div>
  )
}

export default Button
