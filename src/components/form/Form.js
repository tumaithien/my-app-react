import React, { useState } from "react";

const Form = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  // obj.property: dot notation
  // obj[property]
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? e.target.checked : value,
    });
  };
  return (
    <div className="p-5">
      <div className="flex gap-5">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 rounded-lg border border-gray-300"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 rounded-lg border border-gray-300"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
      {/* {message}
      <textarea
        name="message"
        className="w-full max-w-[300px] p-5 rounded-lg border border-gray-300"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="Viet Nam">Viet Nam</option>
        <option value="Lao">Lao</option>
        <option value="Campuchia">Campuchia</option>
      </select> */}
    </div>
  );
};

export default Form;
