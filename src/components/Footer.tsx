import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Twitter, Instagram, Youtube } from "lucide-react";

const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png"
                alt="Small Group Logo"
                className="h-10 w-auto mr-2"
              />
              <h1 className="text-xl font-bold tracking-tight">
                <span className="text-smallai-white">Small</span>
                <span className="text-smallai-purple">AI</span>
              </h1>
            </Link>
            <p className="text-gray-400 mb-6">
              AI automation agency specializing in custom AI solutions to
              transform your business operations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/prakkarshh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/smallai.automation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@smallgrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://vt.tiktok.com/ZSMxNePcG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="TikTok"
              >
                <TikTok />
              </a>
              <a
                href="mailto:prakarshgupta02051@gmail.com"
                className="text-gray-400 hover:text-smallai-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://discord.gg/pMBZWCgn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Discord"
              >
                <img
                  src="/discord.png"
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  AI Agents
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Workflow Automation
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  AI Strategy
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Data Intelligence
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a
                  href="mailto:prakarshgupta02051@gmail.com"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  prakarshgupta02051@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="https://www.youtube.com/@smallgrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  YouTube: @smallgrp
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="https://discord.gg/pMBZWCgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Discord
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="https://www.instagram.com/smallai.automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-smallai-purple transition-colors"
                >
                  Instagram: @smallai.automation
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/prakarshgupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallai-purple hover:text-smallai-purple-light transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Small AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-smallai-purple text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-smallai-purple text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
