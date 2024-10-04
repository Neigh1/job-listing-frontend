import React, { useState } from 'react';
//import './AddJobPage.css'; // Create a CSS file for styling

function AddJobPage() {
  // State to manage form input values
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Example: Log job details to the console (you can replace this with actual submission logic)
    const jobData = {
      jobTitle,
      companyName,
      jobDescription,
    };

    console.log('Job Data Submitted:', jobData);

    // Clear form fields after submission (optional)
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
