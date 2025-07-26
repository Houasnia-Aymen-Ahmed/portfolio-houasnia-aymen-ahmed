// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatPanel from './ChatPanel';
import PropTypes from 'prop-types';

const Chatbot = ({ handleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ChatBubble onClick={() => setIsOpen(true)} />
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
};

Chatbot.propTypes = {
  handleThemeSwitch: PropTypes.func.isRequired,
};

export default Chatbot;
