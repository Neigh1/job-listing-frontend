import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './JobListPage.css'; 

const jobs = [
  { id: 1, title: 'Software Developer', company: 'ABC Corp', location: 'Sandton' },
  { id: 2, title: 'Data Scientist', company: 'XYZ Inc', location: 'Pretoria' },
  { id: 3, title: 'Marketing Manager', company: 'DEF Agency', location: 'Centurion' },
  { id: 4, title: 'UX/UI Designer', company: 'GHI Studios', location: 'Midrand' },
  { id: 5, title: 'Business Analyst', company: 'JKL Consulting', location: 'Alberton' },
  { id: 6, title: 'Front-end Developer', company: 'MNO Tech', location: 'Cape Town' },
  { id: 7, title: 'Back-end Developer', company: 'PQR Solutions', location: 'Kempton Park' },
  { id: 8, title: 'Full-stack Developer', company: 'STU Software', location: 'Houghton' },
  { id: 9, title: 'DevOps Engineer', company: 'VWX Cloud', location: 'Randburg' },
  { id: 10, title: 'Quality Assurance Tester', company: 'YZQ Labs', location: 'Rivonia' },
];

const JOBS_PER_PAGE = 6;

function JobListing() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  return (
    <div className='JobContainer' id='Job'>
      <h2>Job Listings</h2>
      <div id="JobContainer">
        {currentJobs.map((job) => (
          <div className='job-listing' key={job.id}>
            <h3>{job.title}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <Link to={`/job-details/${job.id}`}>
              <button className='details-button'>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      <div className='paging'>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span id="page-number">{currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default JobListing;
