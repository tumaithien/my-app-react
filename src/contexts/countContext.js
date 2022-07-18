import { createContext, useContext, useState } from "react";

const CounterContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CounterContext.Provider value={value} {...props}></CounterContext.Provider>
  );
}

function useCount() {
  const context = useContext(CounterContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
}

export { CountProvider, useCount };
