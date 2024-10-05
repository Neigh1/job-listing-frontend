import React, { useState } from 'react';


function AddJobPage() {

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const jobData = {
      jobTitle,
      companyName,
      jobDescription,
    };

    console.log('Job Data Submitted:', jobData);

    
    setJobTitle('');
    setCompanyName('');
    setJobDescription('');
  };

  return (
    <div className="job-form-container">
      <h1 className="form-title">Post a New Job</h1>
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)} // Update state on change
            placeholder="Enter the job title"
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} // Update state on change
            placeholder="Enter the company name"
          />
        </div>

        <div className="form-group">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)} // Update state on change
            placeholder="Enter the job description"
          />
        </div>

        <button className="submit-button" type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default AddJobPage;
