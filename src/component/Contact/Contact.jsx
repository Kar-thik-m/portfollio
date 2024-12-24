import React, { useState } from 'react';
import contactstyle from "../Contact/Contact.module.css";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '', 
    user_email: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const { user_mail, ...formDataWithoutEmail } = formData;
    emailjs
      .sendForm('service_6hvdrl5', 'template_plqa49z', e.target, {
        publicKey: 'AlCO8U6H6euPZLejG',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
         
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error);
         
        }
      );
  };

  return (
    <div>
      <div className={contactstyle.title} id='contact'>
        <h2>Contact / Hire me</h2>
      </div>
      <div className={contactstyle.portfoliocontact}>
        <form onSubmit={handleSubmit}>
          <div className={contactstyle.formgroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="user_name" 
              value={formData.user_name} 
              onChange={handleChange}
              required
            />
          </div>
          <div className={contactstyle.formgroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="user_email" 
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={contactstyle.formgroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
