import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Set up EmailJS parameters
    const templateParams = {
      to_name: 'Recipient Name', // Replace with the recipient's name
      from_name: formData.name,
      message: formData.message,
      from_email: formData.email
    };
  
    // Replace these with your EmailJS service and template IDs
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const userID = import.meta.env.VITE_EMAILJS_USERID;    
  
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        
        // Clear input fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Show success message 
        // Later replace with modal
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
