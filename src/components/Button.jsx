import React from 'react';

function Button(props) {
  return (
    <div className="w-full">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Button;
