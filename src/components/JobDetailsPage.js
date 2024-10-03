import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetailsPage() {
  let { id } = useParams();  // Capture the id from the URL

  const jobs = [
    {
      id: '1',
      title: 'Software Developer',
      jobType: 'Full-time',
      location: 'Sandton',
      salary: 'R 60,000 - R 80,000 per annum',
      experience: '2-5 years',
      skills: 'JavaScript, HTML, CSS, React',
    },
    {
      id: '2',
      title: 'Data Scientist',
      jobType: 'Full-time',
      location: 'Pretoria',
      salary: 'R 80,000 - R 100,000 per annum',
      experience: '5-10 years',
      skills: 'Python, R, Machine Learning, Data Visualization',
    },
    {
      id: '3',
      title: 'Marketing Manager',
      jobType: 'Full-time',
      location: 'Centurion',
      salary: 'R 50,000 - R 70,000 per annum',
      experience: '3-6 years',
      skills: 'Marketing Strategy, Social Media, Content Creation',
    },
  ];

  const job = jobs.find(job => job.id === id);  // Find the job by id

  if (!job) {
    return <h3>Job not found</h3>;
  }

  return (
    <div>
      <h2>Job Details</h2>
      <div>
        <h3>{job.title}</h3>
        <p>Job Type: {job.jobType}</p>
        <p>Location: {job.location}</p>
        <p>Salary: {job.salary}</p>
        <p>Experience: {job.experience}</p>
        <p>Skills: {job.skills}</p>
      </div>
    </div>
  );
}

export default JobDetailsPage;
