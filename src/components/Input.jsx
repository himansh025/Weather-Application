import React from 'react';

const Input = (props) => {
  return (
    <input
      className="input border rounded-md p-2 w-full"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
