import React from 'react';
import { useParams } from 'react-router-dom';

const jobs = [
  { title: 'Software Developer', company: 'ABC Corp', location: 'Sandton', jobType: 'Full-time', salary: 'R 60,000 - R 80,000 per annum', experience: '2-5 years', skills: 'JavaScript, HTML, CSS, React' },
  { title: 'Data Scientist', company: 'XYZ Inc', location: 'Pretoria', jobType: 'Full-time', salary: 'R 80,000 - R 100,000 per annum', experience: '5-10 years', skills: 'Python, R, Machine Learning, Data Visualization' },
  { title: 'Marketing Manager', company: 'DEF Agency', location: 'Centurion', jobType: 'Full-time', salary: 'R 50,000 - R 70,000 per annum', experience: '3-6 years', skills: 'Marketing Strategy, Social Media, Content Creation' },
  { title: 'UX/UI Designer', company: 'GHI Studios', location: 'Midrand', jobType: 'Full-time', salary: 'R 40,000 - R 60,000 per annum', experience: '2-5 years', skills: 'User Experience, User Interface, Adobe Creative Suite' },
  { title: 'Business Analyst', company: 'JKL Consulting', location: 'Alberton', jobType: 'Full-time', salary: 'R 50,000 - R 70,000 per annum', experience: '3-6 years', skills: 'Business Analysis, Requirements Gathering, Project Management' },
  { title: 'Front-end Developer', company: 'MNO Tech', location: 'Cape Town', jobType: 'Full-time', salary: 'R 40,000 - R 60,000 per annum', experience: '2-5 years', skills: 'HTML, CSS, JavaScript, React' },
  { title: 'Back-end Developer', company: 'PQR Solutions', location: 'Kempton Park', jobType: 'Full-time', salary: 'R 50,000 - R 70,000 per annum', experience: '3-6 years', skills: 'Python, Django, SQL' },
  { title: 'Full-stack Developer', company: 'STU Software', location: 'Houghton', jobType: 'Full-time', salary: 'R 60,000 - R 80,000 per annum', experience: '5-10 years', skills: 'JavaScript, HTML, CSS, React, Node.js' },
  { title: 'DevOps Engineer', company: 'VWX Cloud', location: 'Randburg', jobType: 'Full-time', salary: 'R 80,000 - R 100,000 per annum', experience: '5-10 years', skills: 'Cloud Computing, Containerization, CI/CD' },
  { title: 'Quality Assurance Tester', company: 'YZQ Labs', location: 'Rivonia', jobType: 'Full-time', salary: 'R 40,000 - R 60,000 per annum', experience: '2-5 years', skills: 'Software Testing, Test Automation, Agile Methodologies' },
];

function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs[id];

  return (
    <div>
      <h2>Job Details</h2>
      {job ? (
        <div>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Job Type: {job.jobType}</p>
          <p>Salary: {job.salary}</p>
          <p>Experience: {job.experience}</p>
          <p>Skills: {job.skills}</p>
        </div>
      ) : (
        <p>Job not found.</p>
      )}
    </div>
  );
}

export default JobDetailsPage;
