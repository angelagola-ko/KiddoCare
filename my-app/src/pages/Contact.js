import React from "react";

function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="firstName">Parent's First Name:</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Parent's Last Name:</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="childName">Child's Name:</label>
          <input type="text" name="childName" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>

        <button type="submit">Submit</button>

        <div>
          {window.location.hash === "#success" && (
            <div id="success">
              <p>Your message has been sent!</p>
            </div>
          )}
          {window.location.hash === "#error" && (
            <div id="error">
              <p>An error occured while submitting your message.</p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
