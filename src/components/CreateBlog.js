import React, { useState } from 'react';

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blogDetails = {title, body, author};
        console.log(blogDetails);
    }
    return <>
    <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} required onChange={(e) =>{setTitle(e.target.value)}}/>
            <label htmlFor="body">Body:</label>
            <textarea id="body" cols="30" rows="10" value={body} required onChange={(e) => setBody(e.target.value)}></textarea>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" value ={author} onChange={(e) => setAuthor(e.target.value)}/>
            <button>Add Blog</button>
        </form>
    </div>

    </>;
}
