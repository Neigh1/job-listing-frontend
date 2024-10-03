import React from 'react';
import './blog.css'; 

function Blog() {
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>

      {/* Reviews Section */}
      <h3>What Our Users Say</h3>
      <div className="reviews">
        <div className="review">
          <h4>Excellent Experience!</h4>
          <p>
            "I found my dream job through Graduates24/7! The website is user-friendly and the job listings are relevant." - <span>Thando Ngcobo</span>
          </p>
        </div>
        <div className="review">
          <h4>Helped Me Get Hired!</h4>
          <p>
            "Graduates24/7 provided me with valuable resources and tips to improve my CV and interview skills. I'm now working at my desired company!" - <span>Sipho Mthembu</span>
          </p>
        </div>
        <div className="review">
          <h4>Easy to Use!</h4>
          <p>
            "I was impressed by the simplicity and effectiveness of Graduates24/7. I applied for several jobs and received responses quickly." - <span>Ntombi Khumalo</span>
          </p>
        </div>
      </div>

      {/* CV-Making Instructions Section */}
      <h3>How to Create a Winning CV</h3>
      <p>Follow these steps to craft a compelling CV:</p>
      <ol>
        <li><strong>Choose a Clear Format:</strong> Use a clean and concise format with bullet points and white space.</li>
        <li><strong>Highlight Your Skills:</strong> Emphasize relevant skills and certifications.</li>
        <li><strong>Tailor Your Experience:</strong> Customize your work experience to match the job requirements.</li>
        <li><strong>Include Relevant Education:</strong> Mention relevant degrees, diplomas, or training.</li>
        <li><strong>Proofread and Edit:</strong> Ensure error-free writing and formatting.</li>
      </ol>

      {/* Additional Tips Section */}
      <h3>Additional Tips for Job Seekers</h3>
      <ul>
        <li>Use keywords from the job posting in your CV.</li>
        <li>Keep your CV concise (1-2 pages).</li>
        <li>Use action verbs (e.g., "Managed," "Created," "Developed").</li>
        <li>Include relevant hobbies or interests.</li>
        <li>Get feedback from friends or mentors.</li>
      </ul>
    </div>
  );
}

export default Blog;
