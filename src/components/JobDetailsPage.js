import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetailsPage() {
  let { id } = useParams();

  return (
    <div>
      <h1>Job Details for Job ID: {id}</h1>
      <p>Here you can display the full job details for the selected job.</p>
    </div>
  );
}

export default JobDetailsPage;
