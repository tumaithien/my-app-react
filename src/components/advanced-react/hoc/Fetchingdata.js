import React from "react";
import withLoading from "./withLoading";

const Fetchingdata = ({ data }) => {
  return <div>Fetching data</div>;
};

export default withLoading(
  Fetchingdata,
  "https://hn.algolia.com/api/v1/search?query=react"
);
