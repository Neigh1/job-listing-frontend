import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './blog.css';                     

function AddToBlog({ setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = { title, content };

      setTimeout(() => {
        console.log("Post added to API:", newPost);
        
        
        setPosts((prevPosts) => [...prevPosts, newPost]);

        
        navigate('/blog');
      }, 1000);

      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="blog-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            rows="10" 
            cols="30" 
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddToBlog;
