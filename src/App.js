import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddJobPage from './components/AddJobPage';
import JobListPage from './components/JobListPage';
import JobDetailsPage from './components/JobDetailsPage';
import './App.css'; // Import your global styles

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-job">Add Job</Link></li>
            <li><Link to="/job-list">Job Listings</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/job-list" element={<JobListPage />} />
          <Route path="/job-details/:id" element={<JobDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
