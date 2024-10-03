import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetailsPage() {
  let { id } = useParams();

function JobInfo() {
  return (
    <div>
      <h2>Job Details of the most popular jobs</h2>
      <div>
        <h3>Software Developer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Sandton</p>
        <p>Salary: R 60,000 - R 80,000 per annum</p>
        <p>Experience: 2-5 years</p>
        <p>Skills: JavaScript, HTML, CSS, React</p>
      </div>
      
      <div>
        <h3>Data Scientist</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Pretoria</p>
        <p>Salary: R 80,000 - R 100,000 per annum</p>
        <p>Experience: 5-10 years</p>
        <p>Skills: Python, R, Machine Learning, Data Visualization</p>
      </div>
      
      <div>
        <h3>Marketing Manager</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Centurion</p>
        <p>Salary: R 50,000 - R 70,000 per annum</p>
        <p>Experience: 3-6 years</p>
        <p>Skills: Marketing Strategy, Social Media, Content Creation</p>
      </div>
      
      <div>
        <h3>UX/UI Designer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Midrand</p>
        <p>Salary: R 40,000 - R 60,000 per annum</p>
        <p>Experience: 2-5 years</p>
        <p>Skills: User Experience, User Interface, Adobe Creative Suite</p>
      </div>
      
      <div>
        <h3>Business Analyst</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Alberton</p>
        <p>Salary: R 50,000 - R 70,000 per annum</p>
        <p>Experience: 3-6 years</p>
        <p>Skills: Business Analysis, Requirements Gathering, Project Management</p>
      </div>
      
      <div>
        <h3>Front-end Developer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Cape Town</p>
        <p>Salary: R 40,000 - R 60,000 per annum</p>
        <p>Experience: 2-5 years</p>
        <p>Skills: HTML, CSS, JavaScript, React</p>
      </div>
      
      <div>
        <h3>Back-end Developer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Kempton Park</p>
        <p>Salary: R 50,000 - R 70,000 per annum</p>
        <p>Experience: 3-6 years</p>
        <p>Skills: Python, Django, SQL</p>
      </div>
      
      <div>
        <h3>Full-stack Developer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Houghton</p>
        <p>Salary: R 60,000 - R 80,000 per annum</p>
        <p>Experience: 5-10 years</p>
        <p>Skills: JavaScript, HTML, CSS, React, Node.js</p>
      </div>
      
      <div>
        <h3>DevOps Engineer</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Randburg</p>
        <p>Salary: R 80,000 - R 100,000 per annum</p>
        <p>Experience: 5-10 years</p>
        <p>Skills: Cloud Computing, Containerization, CI/CD</p>
      </div>
      
      <div>
        <h3>Quality Assurance Tester</h3>
        <p>Job Type: Full-time</p>
        <p>Location: Rivonia</p>
        <p>Salary: R 40,000 - R 60,000 per annum</p>
        <p>Experience: 2-5 years</p>
        <p>Skills: Software Testing, Test Automation, Agile Methodologies</p>
      </div>
    </div>
  );
}



export default JobDetailsPage;
