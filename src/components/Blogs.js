import React from "react";
import useHover from "../hook/useHover";
import useLinkNewTab from "../hook/useLinkNewTab";

const Blogs = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        quos nulla excepturi odio cumque dolore consequatur recusandae, et
        ipsum.{" "}
        <a
          href="https://google.com"
          className={`${hovered ? "text-green-400" : ""} underline`}
          ref={nodeRef}
        >
          {" "}
          Google.com
        </a>{" "}
        Nihil, quos rem illo enim nobis magnam incidunt officia natus.
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        quos nulla excepturi odio cumque dolore consequatur recusandae, et
        ipsum.{" "}
        <a href="https://google.com" className="underline">
          {" "}
          Google.com
        </a>{" "}
        Nihil, quos rem illo enim nobis magnam incidunt officia natus.
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        quos nulla excepturi odio cumque dolore consequatur recusandae, et
        ipsum.{" "}
        <a href="https://google.com" className="underline">
          {" "}
          Google.com
        </a>{" "}
        Nihil, quos rem illo enim nobis magnam incidunt officia natus.
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        quos nulla excepturi odio cumque dolore consequatur recusandae, et
        ipsum.{" "}
        <a href="https://google.com" className="underline">
          {" "}
          Google.com
        </a>{" "}
        Nihil, quos rem illo enim nobis magnam incidunt officia natus.
      </p>
    </div>
  );
};

export default Blogs;
