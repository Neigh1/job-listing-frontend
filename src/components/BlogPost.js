import React from 'react';
import { useLocation } from 'react-router-dom';
import './blog.css';

function BlogPost() {
  const location = useLocation();
  const { title, content } = location.state || {};

  return (
    <div className="blog-post-container">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
