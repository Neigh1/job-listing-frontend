
import React, { useState } from 'react';

const MailingList = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSuccessMessage(`Thank you for joining our mailing list, ${email}!`);
    setEmail('');
  };

  return (
    <div className="mailing-list">
      <h2>Join Our Mailing List</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default MailingList;
