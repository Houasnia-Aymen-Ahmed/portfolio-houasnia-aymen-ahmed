import React, { useEffect, useState } from "react";
import { socialMedia } from "../data";

const SocialMediaButton = ({ social, size = "20" }) => {
    const [theme, setTheme] = useState("light");

    // Detect theme
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(mq.matches ? "dark" : "light");
        const handler = (e) => setTheme(e.matches ? "dark" : "light");
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Map size to proper Tailwind classes
    const getSizeClass = (size) => {
        const sizeMap = {
            "16": "w-4 h-4",
            "20": "w-5 h-5",
            "24": "w-6 h-6",
            "26": "w-[26px] h-[26px]",
            "28": "w-7 h-7",
            "30": "w-[30px] h-[30px]",
            "32": "w-8 h-8",
            "40": "w-10 h-10",
            "44": "w-11 h-11",
        };
        return sizeMap[size] || "w-5 h-5";
    };

    return (
        <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-social-bg-dark dark:bg-social-bg-light hover:bg-social-hover
                 inline-flex items-center rounded-full
                 transition-all ease-in duration-300 group"
        >
            <img
                className={`${getSizeClass(size)} transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert`}
                src={theme === "dark" ? social.icon2 : social.icon}
                alt={social.id}
            />
        </a>
    );
};

const SocialMediaButtons = ({ size = "20px" }) => {
    return (
        <>
            {socialMedia.map((social) => (
                <SocialMediaButton key={social.id} social={social} size={size} />
            ))}
        </>
    );
};

export default SocialMediaButtons;
