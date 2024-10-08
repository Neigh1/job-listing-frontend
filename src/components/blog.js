import React from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';

function Blog({ posts = [] }) {
  const navigate = useNavigate();

  const handleTitleClick = (post) => {
    navigate(`/blog/${post.title}`, { state: post });
  };

  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>

      
      <div className="posts">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post, index) => (
            <div 
              key={index} 
              className={index === posts.length - 1 ? "post large" : "post small"}
            >
              <h3 onClick={() => handleTitleClick(post)} style={{ cursor: 'pointer' }}>
                {post.title}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;
