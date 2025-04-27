import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

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

const AboutSection = () => {
  return (
    <section
      className="py-24 bg-smallai-black relative overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-smallai-blue-dark to-transparent opacity-10"
        style={{ filter: "blur(150px)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-reveal-from-left">
            <div className="rounded-2xl overflow-hidden border border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-purple-blue opacity-30" />
              <img
                src="/lovable-uploads/1298d032-0eb4-4d9c-8d83-0a9bebbe096c.png"
                alt="Prakarsh Gupta"
                className="w-full h-auto object-cover"
              />
            </div>
            <img
              src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png"
              alt="Small Group Logo"
              className="absolute -bottom-6 -right-6 h-16 w-auto p-2 glassmorphism rounded-xl"
            />
          </div>

          <div className="animate-reveal-from-right">
            <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">
              About Us
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              Delivering{" "}
              <span className="gradient-text">Measurable Results</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Small AI specializes in transforming businesses through targeted
              AI automation. We build solutions that deliver quantifiable ROI,
              not just technological novelty.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Cut operational costs by 40% with AI-powered automation",
                "Increase customer conversion rates by up to 3x",
                "Reduce manual work by 20+ hours per week",
                "Drive decision-making with 90% more accurate data analysis",
                "Scale operations without scaling headcount",
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle
                    className="text-smallai-purple mr-3 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <Button
                className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
                asChild
              >
                <a
                  href="https://calendly.com/prakarshgupta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <div className="mt-4">
                <h4 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium">
                  Connect With Us
                </h4>
                <div className="flex space-x-5">
                  <a
                    href="https://x.com/prakkarshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} className="text-[#1DA1F2]" />
                  </a>

                  <a
                    href="https://www.youtube.com/@smallgrp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} className="text-[#FF0000]" />
                  </a>
                  <a
                    href="https://vt.tiktok.com/ZSMxNePcG/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <TikTok />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prakarsh-gupta-5a1648167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="text-[#0A66C2]" />
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
                      className="h-7 w-7 rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
