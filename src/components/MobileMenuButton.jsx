import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { createRipple } from "../utils/rippleEffect";

const MobileMenuButton = ({ isHeaderVisible, onToggle }) => {
    return (
        <button
            type="button"
            className="fixed p-2 z-[9999] top-4 right-20 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center md:hidden flex transition-colors overflow-hidden"
            onClick={(e) => {
                onToggle();
                createRipple(e);
            }}
            aria-label={isHeaderVisible ? "Close menu" : "Open menu"}
        >
            {isHeaderVisible ? (
                <FontAwesomeIcon icon={faClose} />
            ) : (
                <FontAwesomeIcon icon={faBars} />
            )}
        </button>
    );
};

export default MobileMenuButton;
