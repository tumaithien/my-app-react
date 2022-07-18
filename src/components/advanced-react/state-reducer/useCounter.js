import { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

export default function useCounter(
  { initialValue = 0 } = {},
  reducer = countReducer
) {
  const [state, dispatch] = useReducer(reducer, { count: initialValue }); // Khởi tạo giá trị cho useReducer
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return {
    count: state.count,
    handleIncrement,
    handleDecrement,
  };
}
useCounter.reducer = countReducer; // Gán reducer mặc định cho property reducer của useCounter
