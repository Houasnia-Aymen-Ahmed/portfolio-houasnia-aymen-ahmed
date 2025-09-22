import React from 'react';

const ProjectImage = ({ imgUrl, title, className = "" }) => {
  // If it's a custom component (wrapped in <>), render it
  if (typeof imgUrl === 'string' && imgUrl.startsWith('<') && imgUrl.endsWith('/>')) {
    const componentName = imgUrl.slice(1, -2).trim();
    
    // Define colors for different project types
    const getProjectColor = (name) => {
      const colors = {
        'AICollar': 'bg-gradient-to-br from-purple-500 to-pink-500',
        'Qwikly': 'bg-gradient-to-br from-blue-500 to-cyan-500',
        'DeepLearning': 'bg-gradient-to-br from-green-500 to-emerald-500',
        'Library': 'bg-gradient-to-br from-orange-500 to-red-500',
        'TicTacToe': 'bg-gradient-to-br from-yellow-500 to-orange-500',
      };
      return colors[name] || 'bg-gradient-to-br from-gray-500 to-gray-600';
    };

    const getProjectText = (name) => {
      const texts = {
        'AICollar': 'AI',
        'Qwikly': 'QK',
        'DeepLearning': 'AI',
        'Library': 'LIB',
        'TicTacToe': 'TT',
      };
      return texts[name] || 'PROJ';
    };

    return (
      <div className={`w-full h-48 ${getProjectColor(componentName)} rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-white text-4xl font-bold drop-shadow-lg">
          {getProjectText(componentName)}
        </div>
      </div>
    );
  }

  // If it's a regular image URL, render the image
  return (
    <img 
      src={imgUrl} 
      alt={title}
      className={`w-full h-48 object-cover rounded-lg ${className}`}
      loading="lazy"
    />
  );
};

export default ProjectImage;
