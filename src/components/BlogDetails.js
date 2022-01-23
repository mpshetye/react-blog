import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/blogs/${id}`;
  const history = useHistory();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(url);
  const handleClick = async() =>{
    try{
      const res = fetch(url,{
        method:'DELETE'
      });
      if (!res.ok) {
        throw Error(`an error has occurred: ${res.status} ${res.statusText}`);
      } else {
        history.push('/');
      }
    } catch(err){
      console.log(err.message);
    }

  }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {loading && <div> Loading...</div>}
      { blog &&
        <article>
          <h2>{blog.title}</h2>
          <p>written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick = {handleClick}>Delete</button>
        </article>
      }
    </div>
  );
};

export default BlogDetails;
