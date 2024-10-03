import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-section">
        <h1>Welcome to Graduates 24/7</h1>
        <p>Your one-stop platform to find or post jobs easily!</p>
      </header>

      {/* Search Bar */}
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search for jobs by title, company, or location..."
        />
        <button type="button">Search</button>
      </section>

      {/* Job Categories Section */}
      <section className="job-categories">
        <h2>Explore Job Categories</h2>
        <div className="categories">
          <div className="category">Software Development</div>
          <div className="category">Data Science</div>
          <div className="category">Design</div>
          <div className="category">Marketing</div>
          <div className="category">Sales</div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-listings">
          <div className="job">
            <h3>Front-End Developer</h3>
            <p>Company: ABC Corp</p>
            <p>Location: Remote</p>
          </div>
          <div className="job">
            <h3>Data Analyst</h3>
            <p>Company: XYZ Inc</p>
            <p>Location: Parktown, JHB</p>
          </div>
          <div className="job">
            <h3>UX/UI Designer</h3>
            <p>Company: Creative Labs</p>
            <p>Location: Sandton, JHB</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <button className="view-jobs-btn">View All Jobs</button>
        <button className="post-job-btn">Post a Job</button>
      </section>
    </div>
  );
}

export default HomePage;