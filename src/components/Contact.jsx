// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
      <Title>Contact</Title>
      <input type="text" name="from_name" placeholder="Name" className="p-2 pl-4 bg-transparent border-2 border-black dark:border-white rounded-md focus:outline-none " />
      <input type="email" name="from_email" placeholder="Email" className="my-2 p-2 pl-4 bg-transparent border-2 border-black dark:border-white rounded-md focus:outline-none" />
      <p>{see}</p>
      {errorMessage && <div className="text-red-500 pb-2">{errorMessage}</div>}
      <textarea name="message" placeholder="Message" rows="10" className="p-2 pl-4 mb-4 bg-transparent border-2 border-black dark:border-white rounded-md focus:outline-none" />
      <input type="submit" value="Send me a message" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-black dark:text-white bg-gradient-to-r dark:from-[#3b1d23] dark:to-[#DFA8B4] from-[#DFA8B4] to-[#3b1d23] drop-shadow-md hover:text-[#DFA8B4] dark:hover:text-[#25040B] dark:hover:from-[#aa8ea0] dark:hover:to-[#aa8ea0] hover:from-[#3b1d23] hover:to-[#3b1d23] " />
    </form>
  );
}

export default Contact