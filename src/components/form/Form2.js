import React, { useState } from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form2 = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-5"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 rounded-lg border border-gray-300"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 rounded-lg border border-gray-300"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button
          className="transition-all p-3 rounded-lg bg-green-400 text-white hover:bg-green-500"
          type="submit"
        >
          Submit
        </button>
      </form>
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

export default Form2;
