import React, { useState } from 'react';
import './contact.css';
import logoGit from '../../assets/icons/git.png';
import logoLi from '../../assets/icons/li.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',  // Replace with your service ID
      'your_template_id', // Replace with your template ID
      formData,
      'your_user_id'      // Replace with your user ID from EmailJS
    )
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message. Please try again later.');
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='mainContainer'>
        <div className='contactContainer'>
          <div className='contactInfoContainer'>
            <h2>Contact Information</h2>
            <p>
              Email: lmark@kth.se 
              <br />
              Number: 070-517 72 78
            </p>
            <div className='iconsContainer'>
              <a className='iconBox' href="https://github.com/lmarkstrom" target="_blank" rel="noopener noreferrer">
                <img className='icons' src={logoGit} alt="Github Logo" />
              </a>
              <a className='iconBox' href="https://www.linkedin.com/in/linusmarkstrom/" target="_blank" rel="noopener noreferrer">
                <img className='icons' src={logoLi} alt="LinkedIn Logo" />
              </a>
            </div>
          </div>
          <div className='contactFormContainer'>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
    </div>
  );

};

export default Contact