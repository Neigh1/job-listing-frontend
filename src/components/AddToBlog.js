import React, { useState } from 'react';

function AddBlogPostPage() {
  const [postTitle, setPostTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [postContent, setPostContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const blogPostData = {
      postTitle,
      authorName,
      postContent,
      tags: tags.split(',').map(tag => tag.trim()), 
    };

    console.log('Blog Post Data Submitted:', blogPostData);

    // Reset fields after submission
    setPostTitle('');
    setAuthorName('');
    setPostContent('');
    setTags('');
  };

  return (
    <div className="blog-post-form-container">
      <h1 className="form-title">Post a New Blog Article</h1>
      <form className="blog-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Post Title</label>
          <input
            type="text"
            name="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)} 
            placeholder="Enter the blog post title"
            required
          />
        </div>

        <div className="form-group">
          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)} 
            placeholder="Enter the author's name"
            required
          />
        </div>

        <div className="form-group">
          <label>Post Content</label>
          <textarea
            name="postContent"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)} 
            placeholder="Enter the blog post content"
            required
          />
        </div>

        <div className="form-group">
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)} 
            placeholder="Enter tags"
          />
        </div>

        <button className="submit-button" type="submit">Post Blog</button>
      </form>
    </div>
  );
}

export default AddBlogPostPage;
