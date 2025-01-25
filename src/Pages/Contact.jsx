/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const emailContent = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    emailjs
      .send(
        "service_i6pkqqn",
        "template_3oox7nr", 
        { message: emailContent },
        "yItPuA_2lxwW0G-Ll"  
      )
      .then(
        (response) => {
          setEmailSent(true); 
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h1 className="contact-heading">Get in touch</h1>
        <p className="contact-subtext">
          Fill in the form to start a conversation
        </p>
        <p className="contact-description">
          You can contact me with any questions, suggestions, or just to say hi. 
          I am always open to new ideas and collaborations. It can be anything like 
          collaborating on good projects, startups, anime, gaming, or anything else.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="contact-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="contact-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            placeholder="Message" 
            className="contact-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4" 
            required 
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>

        {/* Success Alert */}
        {emailSent && (
          <div className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
              Your message has been sent successfully!
            </div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" onClick={() => setEmailSent(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
