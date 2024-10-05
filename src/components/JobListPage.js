import React from 'react';
import { Link } from 'react-router-dom';

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

function JobListing() {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <Link to={`/job-details/${job.id}`}>View Details</Link> {/* Add link to job details page */}
        </div>
      ))}
    </div>
  );
}

export default JobListing;
