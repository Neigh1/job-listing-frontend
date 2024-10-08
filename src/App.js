import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddJobPage from './components/AddJobPage';
import JobListPage from './components/JobListPage';
import JobDetailsPage from './components/JobDetailsPage';
import Blog from './components/blog';
import AddToBlog from './components/AddToBlog';
import BlogPost from './components/BlogPost'; 
import './App.css';
import logo from './Images/Screenshot 2024-10-03 154214.png';

function App() {
  const [posts, setPosts] = useState([]); 

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-job">Add Job</Link></li>
            <li><Link to="/job-list">Job Listings</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/add-to-blog">Add to Blog</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/job-list" element={<JobListPage />} />
          <Route path="/job-details/:id" element={<JobDetailsPage />} />
          <Route path="/blog" element={<Blog posts={posts} />} /> 
          <Route path="/add-to-blog" element={<AddToBlog setPosts={setPosts} />} /> 
          <Route path="/blog/:title" element={<BlogPost />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
