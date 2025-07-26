// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ChatBubble = ({ onClick }) => {
  return (
    <div
      className="fixed bottom-10 right-10 w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faComment} size="2x" />
    </div>
  );
};

ChatBubble.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ChatBubble;
