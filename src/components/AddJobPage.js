import React from 'react';

function AddJobPage() {
  return (
    <div>
      <h1>Add a Job</h1>
      <form>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" />
        <label>Company Name:</label>
        <input type="text" name="companyName" />
        <label>Job Description:</label>
        <textarea name="jobDescription" />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default AddJobPage;
