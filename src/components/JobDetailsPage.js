import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetailsPage() {
  let { id } = useParams();

  return (
    <div>
      <h2>Job Details</h2>
      <p>Job Type: Full-time</p>
      <p>Location: Remote</p>
      <p>Salary: R60,000 - R80,000</p>
    </div>
  );


export default JobDetailsPage;
