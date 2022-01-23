import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {loading && <div> Loading...</div>}
      { blog &&
        <article>
          <h2>{blog.title}</h2>
          <p>written by : {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      }
    </div>
  );
};

export default BlogDetails;