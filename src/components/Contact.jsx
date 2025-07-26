// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'; // Grouped imports
import Title from './Title';
import emailjs from '@emailjs/browser';
import { createRipple } from '../utils/rippleEffect';
import { motion } from 'framer-motion'; // Import motion

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [focusedField, setFocusedField] = useState(''); // To track focused field for animated underline
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
        console.log(result.text);
        setSuccessMessage('Message sent successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Failed to send message. Please try again later.');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full space-y-6"> {/* Increased space-y */}
      <Title>Contact</Title>

      {/* Name Field */}
      <div className="relative">
        <label htmlFor="from_name" className="sr-only">Name</label>
        <input
          id="from_name" type="text" name="from_name" placeholder="Name"
          onFocus={() => setFocusedField('from_name')}
          onBlur={() => setFocusedField('')}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow peer" /> {/* Added peer for potential label animation later */}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === 'from_name' ? '100%' : '0%' }}
          transition={{ duration: 0.3, ease: 'circOut' }}
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="from_email" className="sr-only">Email</label>
        <input
          id="from_email" type="email" name="from_email" placeholder="Email"
          onFocus={() => setFocusedField('from_email')}
          onBlur={() => setFocusedField('')}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow peer" />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === 'from_email' ? '100%' : '0%' }}
          transition={{ duration: 0.3, ease: 'circOut' }}
        />
      </div>

      {/* Success/Error Messages - to be animated */}
      {successMessage && <p className="text-sm text-green-500 dark:text-green-400">{successMessage}</p>}
      {errorMessage && <div className="text-sm text-red-500 dark:text-red-400 pb-2">{errorMessage}</div>}

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message" name="message" placeholder="Message" rows="6"
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField('')}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow resize-none peer" />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
          transition={{ duration: 0.3, ease: 'circOut' }}
        />
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