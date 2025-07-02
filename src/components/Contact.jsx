// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { createRipple } from '../utils/rippleEffect'; // Import createRipple

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [see, letSee] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.from_email.value.toLowerCase();
    const gmailRegex = /@gmail\.com$/;

    if (!gmailRegex.test(emailInput)) {
      setErrorMessage('Please enter a Gmail address.');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
    emailjs.sendForm('service_cz2ne8l', 'template_28c7cn3', form.current, 'UV6yG0DyW440M-Jte')
      .then((result) => {
        letSee(result.text)
        console.log(result.text);
      }, (error) => {
        letSee(error.text)
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full space-y-4"> {/* Added space-y-4 for spacing */}
      <Title>Contact</Title>
      <div>
        <label htmlFor="from_name" className="sr-only">Name</label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          placeholder="Name"
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary
                     transition-shadow" />
      </div>
      <div>
        <label htmlFor="from_email" className="sr-only">Email</label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          placeholder="Email"
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary
                     transition-shadow" />
      </div>
      {see && <p className="text-sm text-accent-primary">{see}</p>} {/* Styled success message */}
      {errorMessage && <div className="text-red-500 pb-2 text-sm">{errorMessage}</div>} {/* Styled error message */}
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="6" // Reduced rows slightly
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary
                     transition-shadow resize-none" /> {/* Added resize-none */}
      </div>
      <input
        type="submit"
        value="Send me a message"
        onClick={createRipple} // Add onClick handler
        className="relative overflow-hidden text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md
                   text-white bg-accent-primary hover:bg-accent-primary-darker
                   focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2
                   dark:focus:ring-offset-dark-bg
                   cursor-pointer transition-all duration-300 ease-in-out
                   motion-safe:hover:animate-pulse" /> {/* Added motion-safe variant */}
    </form>
  );
}

export default Contact