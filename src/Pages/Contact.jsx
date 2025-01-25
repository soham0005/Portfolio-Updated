import './Contact.css';

const Contact = () => {
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
        <form className="contact-form">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="contact-input"
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="contact-input"
            required 
          />
          <textarea 
            placeholder="Message" 
            className="contact-textarea"
            rows="4" 
            required 
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
