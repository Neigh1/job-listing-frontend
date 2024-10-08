import React from 'react';
import './HomePage.css';
import AddToBlog from './AddToBlog';
import MailingList from './mailing'; 

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Graduates 24/7</h1>
        <p className="hero-subtitle">Your one-stop platform to find or post jobs easily!</p>
        <section className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for jobs by title, company, or location..."
          />
          <button type="button" className="search-button">Search</button>
        </section>
      </header>

      <h3 className="reviews-title">What Our Users Say</h3>
      <div className='ReviewContainer' id='Review'>
        <div className="review">
          <h4 className="review-title">Excellent Experience!</h4>
          <p className="review-text">
            "I found my dream job through Graduates24/7! The website is user-friendly and the job listings are relevant." - <span className="review-author">Thando Ngcobo</span>
          </p>
        </div>
        <div className="review">
          <h4 className="review-title">Helped Me Get Hired!</h4>
          <p className="review-text">
            "Graduates24/7 provided me with valuable resources and tips to improve my CV and interview skills. I'm now working at my desired company!" - <span className="review-author">Sipho Mthembu</span>
          </p>
        </div>
        <div className="review">
          <h4 className="review-title">Easy to Use!</h4>
          <p className="review-text">
            "I was impressed by the simplicity and effectiveness of Graduates24/7. I applied for several jobs and received responses quickly." - <span className="review-author">Ntombi Khumalo</span>
          </p>
        </div>
      </div>
      
      <div className="cta">
        <button className="AddtoBlog">Post on Blog</button>
        <MailingList /> 
      </div>
    </div>
  );
}

export default HomePage;
