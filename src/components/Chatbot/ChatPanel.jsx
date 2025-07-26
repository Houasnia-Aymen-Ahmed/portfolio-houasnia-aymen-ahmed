// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const ChatPanel = ({ isOpen, onClose, handleThemeSwitch }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);

      if (inputValue.startsWith('/')) {
        const command = inputValue.substring(1);
        let botResponse = '';

        switch (command) {
          case 'about':
            window.location.hash = 'About';
            botResponse = 'Sure, let me take you to the About section.';
            break;
          case 'projects':
            window.location.hash = 'Projects';
            botResponse = 'Here are the projects. Take a look!';
            break;
          case 'skills':
            window.location.hash = 'Skills';
            botResponse = 'Here are my skills.';
            break;
          case 'contact':
            window.location.hash = 'Contact';
            botResponse = 'Here is the contact section.';
            break;
          case 'summary':
            botResponse = "I'm a passionate software engineer with a love for building beautiful and functional web applications.";
            break;
          case 'resume':
            window.location.hash = 'Resume';
            botResponse = 'Here is the resume.';
            break;
          case 'timeline':
            window.location.hash = 'Timeline';
            botResponse = 'Here is the timeline.';
            break;
          case 'theme':
            handleThemeSwitch();
            botResponse = 'Theme switched!';
            break;
          case 'help':
            botResponse = 'Available commands: /about, /projects, /skills, /contact, /summary, /resume, /timeline, /theme';
            break;
          default:
            botResponse = "Sorry, I don't recognize that command. Try /help to see the available commands.";
        }
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
          setIsTyping(false);
        }, 500);
      } else {
        // Simulate bot response
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { text: `You said: ${inputValue}`, sender: 'bot' }]);
          setIsTyping(false);
        }, 1000);
      }
      setInputValue('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-28 right-10 w-full max-w-sm h-96 bg-white dark:bg-dark-bg-alt shadow-lg rounded-lg flex flex-col sm:w-80"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-heading"
        >
          <div className="flex justify-between items-center p-4 bg-accent-primary text-white rounded-t-lg">
            <h3 id="chatbot-heading" className="text-lg font-semibold">Chatbot</h3>
            <button onClick={onClose} aria-label="Close chat panel">Close</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-accent-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            {isTyping && <div className="text-left">...</div>}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              aria-label="Chat message input"
            />
            <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-accent-primary text-white rounded-lg" aria-label="Send message">Send</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ChatPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleThemeSwitch: PropTypes.func.isRequired,
};

export default ChatPanel;
