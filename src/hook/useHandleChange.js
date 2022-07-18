import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setValues({
      ...values,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };
  return {
      values,
      handleChange
  };
}
