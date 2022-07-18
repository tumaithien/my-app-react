import React, { useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parrentHeight, setparrentHeight] = useState("auto");
  const handleChange = (e) => {
    setparrentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight("auto");
    setContent(e.target.value);
  };

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setparrentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [content]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: parrentHeight,
      }}
    >
      <textarea
        className="overflow-hidden leading-normal w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-300 resize-none"
        placeholder="Please enter your content...."
        value={content}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
