import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      BlogPageDetails
      <button
        onClick={() => navigate("/blog")}
        className="p-3 ml-2 bg-blue-500 text-white"
      >
        Navigate Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
