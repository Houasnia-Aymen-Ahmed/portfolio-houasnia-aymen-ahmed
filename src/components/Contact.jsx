import React, { useState } from "react";
import Title from "./Title";
import { createRipple } from "../utils/rippleEffect";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => setErrorMessage(""), 5000);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => setErrorMessage(""), 5000);
      setIsSubmitting(false);
      return;
    }

    try {
      // Using Vercel Serverless Function for email sending
      const response = await fetch(
        "https://portfolio-houasnia-aymen-ahmed.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage(
        "Failed to send message. Please try again later or contact me directly at aymenaymen2056@gmail.com"
      );
      setTimeout(() => setErrorMessage(""), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-6">
      <Title>Contact</Title>

      {/* Name Field */}
      <div className="relative">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField("")}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow peer"
          disabled={isSubmitting}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === "name" ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "circOut" }}
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField("")}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow peer"
          disabled={isSubmitting}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === "email" ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "circOut" }}
        />
      </div>

      {/* Success/Error Messages */}
      {successMessage && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-green-500 dark:text-green-400"
        >
          {successMessage}
        </motion.p>
      )}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 dark:text-red-400 pb-2"
        >
          {errorMessage}
        </motion.div>
      )}

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          rows="6"
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField("")}
          className="w-full p-3 bg-light-bg-alt dark:bg-dark-bg-alt
                     border border-slate-400 dark:border-slate-600
                     text-light-text-primary dark:text-dark-text-primary
                     rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary/70
                     transition-shadow resize-none peer"
          disabled={isSubmitting}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-accent-primary"
          animate={{ width: focusedField === "message" ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "circOut" }}
        />
      </div>

      <button
        type="submit"
        onClick={createRipple}
        disabled={isSubmitting}
        className={`relative overflow-hidden text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md
                   text-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2
                   dark:focus:ring-offset-dark-bg transition-all duration-300 ease-in-out
                   motion-safe:hover:animate-pulse ${
                     isSubmitting
                       ? "bg-gray-400 cursor-not-allowed"
                       : "bg-accent-primary hover:bg-accent-primary-darker cursor-pointer"
                   }`}
      >
        {isSubmitting ? "Sending..." : "Send me a message"}
      </button>
    </form>
  );
};

export default Contact;
