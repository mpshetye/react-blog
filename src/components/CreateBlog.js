import React, { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const blogDetails = { title, body, author };
    try {
      const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogDetails),
      });
      console.log(res);
      if (!res.ok) {
        throw Error(`an error has occurred: ${res.status} ${res.statusText}`);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <>
      {error ? (
        <div> {error} </div>
      ) : (
        <div className="create">
          <h2>Add New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              cols="30"
              rows="10"
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {!loading && <button>Add Blog</button>}
            {loading && <button disabled="disabled">Uploading...</button>}
          </form>
        </div>
      )}
    </>
  );
}
