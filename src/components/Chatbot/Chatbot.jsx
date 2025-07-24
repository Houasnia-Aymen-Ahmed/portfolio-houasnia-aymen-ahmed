import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatPanel from './ChatPanel';

const Chatbot = ({ handleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ChatBubble onClick={() => setIsOpen(true)} />
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
};

export default Chatbot;
