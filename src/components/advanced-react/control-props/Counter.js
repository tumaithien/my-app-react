import React from "react";
import { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange; //kiểm tra props value và onChange có được truyền vào
  const getCount = () => (isControlled ? value : count); // kiểm tra giá trị truyền vào nếu không có giá trị truyền vào thì lấy giá trị mặc định count
  function handleCountChange(newValue) {
    isControlled ? onChange(newValue) : setCount(newValue); // kiểm tra nếu có props truyền vào thì gọi onChange ngược lại gọi setCount
  }
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };
  return (
    <CountProvider
      value={{ handleIncrement, handleDecrement, count: getCount() }}
    >
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
