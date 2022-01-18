import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res => res.json).then(data =>{
            setLoading(false);
            setBlogs(data);
        }).catch(err => console.log(err));
        }
    , []);
    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
            
        </div>
    );
}
 
export default Home;