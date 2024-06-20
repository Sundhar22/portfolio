import "./contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zmivvte', 'template_zuhcwls', form.current, {
          publicKey: 'Nwcl6yqZowkF-oeJZ',
        })
        e.target.reset()
    };
  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">Get in Touch</h1>
      <p className="section__subtitle">Don`t like forms? send me an email</p>

      <div className="contact__container container grid">
        <form ref={form} onSubmit={sendEmail} action=" " method="POST" className="contact__form grid">
          <div className="contact__form-container grid">

            
            <div className="contact__inputs">
              <i className="uil uil-user contact__inputs-icon"></i>
              <input className="contact__inputs-name" type="text" placeholder="Insert your name" name="name" />
            </div>

            <div className="contact__inputs">
              <i className="uil uil-envelope-alt contact__inputs-icon"></i>
              <input
               className="contact__inputs-email"
                type="email"
                placeholder="Insert your email"
                name="email"
              />
            </div>
          </div>

          <div className="contact__inputs">
            <i className="uil uil-subject contact__inputs-icon"></i>
            <input
            className="contact__inputs-subject"
              type="text"
              placeholder="Insert your subject"
              name="subject"
            />
          </div>

          <div className="contact__inputs contact__message">
            <i className="uil uil-lightbulb-alt contact__inputs-icon"></i>
            <textarea
            className="contact__inputs-message"
              name="message"
              id=""
              cols="0"
              rows="7"
              placeholder="Insert your message"
            ></textarea>
          </div>
            <button className="contact__button button button--flex" type="submit" >
            Send
            <i className="uil uil-envelope-upload button__icon"></i>
            </button>
        </form>
        
      </div>
    </section>
  );
}

export default Contact;
