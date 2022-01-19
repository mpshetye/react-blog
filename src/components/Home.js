import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        //error coming back from server due to resource not existing
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setBlogs(data);
        setError(null);
      })
      .catch((err) => {
        // auto catches network/connection error
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
