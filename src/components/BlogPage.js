import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "TMT" });
  }, []);
  return <div>BlogPage</div>;
};

export default BlogPage;
