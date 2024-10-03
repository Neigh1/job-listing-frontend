import React from 'react';


function JobListing() {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job.title}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
        </div>
      ))}
    </div>
  );
}

const jobs = [
  { title: 'Software Developer', company: 'ABC Corp', location: 'Sandton' },
  { title: 'Data Scientist', company: 'XYZ Inc', location: 'Pretoria' },
  { title: 'Marketing Manager', company: 'DEF Agency', location: 'Centurion' },
  { title: 'UX/UI Designer', company: 'GHI Studios', location: 'Midrand' },
  { title: 'Business Analyst', company: 'JKL Consulting', location: 'Alberton' },
  { title: 'Front-end Developer', company: 'MNO Tech', location: 'Cape Town' },
  { title: 'Back-end Developer', company: 'PQR Solutions', location: 'Kempton Park' },
  { title: 'Full-stack Developer', company: 'STU Software', location: 'Houghton' },
  { title: 'DevOps Engineer', company: 'VWX Cloud', location: 'Randburg' },
  { title: 'Quality Assurance Tester', company: 'YZQ Labs', location: 'Rivonia' },
];


export default JobListPage;
