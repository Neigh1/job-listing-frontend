import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddJobPage from './components/AddJobPage';
import JobListPage from './components/JobListPage';
import JobDetailsPage from './components/JobDetailsPage';
import Blog from './components/blog'; 
import './App.css'; // Import your global styles
import logo from './Images/Screenshot 2024-10-03 154214.png'; 

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-job">Add Job</Link></li>
            <li><Link to="/job-list">Job Listings</Link></li>
            <li><Link to="/job-details/:id">Job Details</Link></li>
            <li><Link to="/blog">Blog</Link></li> {/* Blog link */}
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/job-list" element={<JobListPage />} />
          <Route path="/job-details/:id" element={<JobDetailsPage />} />
          <Route path="/blog" element={<Blog />} /> {/* Route for Blog */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
