import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  emailjs.init("pdZyEDQiZ6L08xhuY");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_he4yud8", "template_vh6by2z", form.current).then(
      (result) => {
        alert("Thank you for sending this message");
      },
      (error) => {
        alert("An error occurred, please try again.");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="project__wrapper">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to work together, feel free to
          reach out!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {/* Additional contact information or links */}
      </div>
    </section>
  );
};

export default Contact;
