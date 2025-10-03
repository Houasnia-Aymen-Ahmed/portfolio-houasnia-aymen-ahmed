import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProjectImage = ({ imgUrl, title, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload image for better performance
  useEffect(() => {
    if (typeof imgUrl === "string" && !imgUrl.startsWith("<")) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imgUrl;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [imgUrl]);

  // If it's a custom component (wrapped in <>), render it
  if (
    typeof imgUrl === "string" &&
    imgUrl.startsWith("<") &&
    imgUrl.endsWith("/>")
  ) {
    const componentName = imgUrl.slice(1, -2).trim();

    // Define colors for different project types
    const getProjectColor = (name) => {
      const colors = {
        AICollar: "bg-gradient-to-br from-purple-500 to-pink-500",
        Qwikly: "bg-gradient-to-br from-blue-500 to-cyan-500",
        DeepLearning: "bg-gradient-to-br from-green-500 to-emerald-500",
        Library: "bg-gradient-to-br from-orange-500 to-red-500",
        TicTacToe: "bg-gradient-to-br from-yellow-500 to-orange-500",
      };
      return colors[name] || "bg-gradient-to-br from-gray-500 to-gray-600";
    };

    const getProjectText = (name) => {
      const texts = {
        AICollar: "AI",
        Qwikly: "QK",
        DeepLearning: "AI",
        Library: "LIB",
        TicTacToe: "TT",
      };
      return texts[name] || "PROJ";
    };

    return (
      <div
        className={`w-full h-full ${getProjectColor(
          componentName
        )} rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="text-white text-4xl font-bold drop-shadow-lg">
          {getProjectText(componentName)}
        </div>
      </div>
    );
  }

  // If it's a regular image URL, render the image with loading state
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Skeleton Loading State */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-lg animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-slate-400 dark:border-slate-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-ui-bg-light dark:bg-ui-bg-dark rounded-lg flex items-center justify-center">
          <div className="text-slate-500 dark:text-slate-400 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={imgUrl}
        alt={title}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        loading="eager"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

ProjectImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectImage;
