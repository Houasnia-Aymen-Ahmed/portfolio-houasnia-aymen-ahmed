import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            type="button"
            className="fixed p-2 z-[9999] top-4 right-4 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center flex transition-colors overflow-hidden"
            onClick={onToggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
            ) : (
                <FontAwesomeIcon icon={faMoon} />
            )}
        </button>
    );
};

export default ThemeToggle;
