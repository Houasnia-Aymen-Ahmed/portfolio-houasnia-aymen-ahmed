// Vercel Serverless Function for sending emails
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load HTML template
const loadEmailTemplate = () => {
  const templatePath = path.join(__dirname, "templates", "email.html");
  return fs.readFileSync(templatePath, "utf8");
};

// Replace template variables
const createEmailTemplate = ({ name, email, message }) => {
  const template = loadEmailTemplate();
  return template
    .replace(/{{name}}/g, name)
    .replace(/{{email}}/g, email)
    .replace(/{{date}}/g, new Date().toLocaleString())
    .replace(/{{message}}/g, message.replace(/\n/g, "<br>"));
};

export default async function handler(req, res) {
  // Enable CORS for GitHub Pages
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Create transporter using environment variables
  const transporter = nodemailer.createTransporter({
    service: "gmail", // or your preferred SMTP service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use app password for Gmail
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow direct reply to sender
      subject: `Portfolio Contact: New message from ${name}`,
      html: createEmailTemplate({ name, email, message }),
      text: `
        New Contact Form Message
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
        
        ---
        You can reply directly to this email to respond to ${name}.
      `,
    });

    console.log("Email sent successfully to:", process.env.EMAIL_USER);
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email",
      details:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
}
