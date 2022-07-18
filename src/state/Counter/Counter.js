import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //     setTimeout(function delay() {
  //         setCount((count) =>  count + 1)
  //     }, 1000)
  // }
  // useEffect(() => {
  //     console.log(count);
  // },[count])
  const [info, setInfo] = useState({
    firstName: "Tu",
    lastName: "Thien",
  });
  useEffect(() => {
    console.log("form input");
  }, [info.lastName]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-lg font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-500 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
