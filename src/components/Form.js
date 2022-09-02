import React from 'react';

const Form = () => {
  return (
    <input
    className="appointment__create-input text--semi-bold"
    name="name"
    type="text"
    placeholder="Enter Student Name"
    value={name}
    onChange={event => {
      setName(event.target.value);
    }}
    data-testid="student-name-input"
/>
  );
};

export default Form;