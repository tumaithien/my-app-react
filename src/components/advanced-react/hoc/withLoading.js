import { useEffect, useState } from "react";
//https://hn.algolia.com/api/v1/search?query=react
function withLoading(Component, url) {
  return (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const dataNews = await response.json();
        console.log(dataNews);
        setData(dataNews.hits);
      }
      fetchData();
    }, []);
    if (!data || data.length === 0) return <div>...Loading</div>;
    console.log(data);
    return <Component data={data} {...props}></Component>;
  };
}
export default withLoading;
