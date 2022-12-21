import { useState } from "react";

export default function useToggle() {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };
  return {
    active,
    handleToggle,
  };
}
