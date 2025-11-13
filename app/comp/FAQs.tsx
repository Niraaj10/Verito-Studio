"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const generalFaqs: FAQItem[] = [
    {
      question: "Why should I choose Verito Studio?",
      answer:
        "We combine creative storytelling, sharp strategy, and consistent execution — helping brands grow across every digital touchpoint, not just look good online.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes! We work with startups and brands globally, managing communication and delivery seamlessly through calls, dashboards, and cloud collaboration.",
    },
    {
      question: "What’s the first step to get started?",
      answer:
        "Book a free discovery call with us. We’ll understand your goals, audit your current presence, and propose the best plan to grow your brand.",
    },
    {
      question: "Do you offer one-time projects or only monthly plans?",
      answer:
        "Both — whether you want a single website build or long-term content management, we can create a package that fits your needs.",
    },
  ];

  const endToEndFaqs: FAQItem[] = [
    {
      question: "What does your end-to-end service include?",
      answer:
        "Our end-to-end package covers everything — from brand strategy, content ideation, scripting, and creative direction to world-class editing, growth strategies, and cross-platform posting. We handle every step so you don’t have to.",
    },
    {
      question: "Is this suitable for startups or established brands?",
      answer:
        "Absolutely! We tailor our approach depending on your stage — helping startups establish a strong digital identity and guiding established brands to scale their reach and refine their online presence.",
    },
    {
      question: "How long does it take to start seeing results?",
      answer:
        "Typically, clients begin noticing engagement and growth improvements within the first 30–45 days as our strategies gain traction across platforms.",
    },
    {
      question: "Can I customize the end-to-end plan?",
      answer:
        "Yes — we create fully personalized plans based on your goals, platforms, and content needs. Every partnership starts with a strategy call to craft the right approach for your brand.",
    },
  ];

  
  const websiteFaqs: FAQItem[] = [
    {
      question: "What kind of websites do you build?",
      answer:
        "We design and develop high-performing, visually stunning websites — from personal portfolios to full-scale business and eCommerce sites — built with Next.js for speed, SEO, and scalability.",
    },
    {
      question: "Do you offer ongoing maintenance or updates?",
      answer:
        "Yes, we offer both one-time builds and monthly maintenance packages to ensure your site stays optimized, secure, and up-to-date.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Definitely! We specialize in rebranding and revamping outdated websites into modern, conversion-focused experiences that truly represent your brand.",
    },
    {
      question: "How much does a website project cost?",
      answer:
        "Pricing depends on complexity and scope. We provide a custom quote after understanding your goals, features, and desired timeline.",
    },
  ];

  
  const smmFaqs: FAQItem[] = [
    {
      question: "Which platforms do you manage?",
      answer:
        "We handle Instagram, LinkedIn, YouTube, Facebook, and TikTok — adapting strategies and content formats that fit each platform’s audience and algorithm.",
    },
    {
      question: "Do you also create content or just manage posting?",
      answer:
        "We do both. Our team handles ideation, scripting, editing, and posting — ensuring your content looks consistent and performs well.",
    },
    {
      question: "How often do you post?",
      answer:
        "Posting frequency depends on your chosen package, but typically ranges from 12 to 25 pieces of content per month, aligned with your goals and audience.",
    },
    {
      question: "Can you help me grow my audience organically?",
      answer:
        "100%. We use organic lead-generation strategies, data-backed content optimization, and engagement tactics to boost visibility and reach without relying solely on ads.",
    },
  ];

  

export default function FAQSection() {
  const [openSection, setOpenSection] = useState<string | null>("general");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="max-w-5xl h-screen mx-auto py-20 px-4 mb-80">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
          ✨ FAQs
        </span>
        <h2 className="text-4xl font-semibold mb-3">Got questions? Find the answers below</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Check out the answers to our most common questions below. We've compiled
          details on everything you need to know to get started and feel confident.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {/* General FAQs */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <button
            onClick={() => toggleSection("general")}
            className="flex justify-between w-full px-6 py-4 text-left font-medium text-lg"
          >
            <span>General FAQ’s</span>
            {openSection === "general" ? <X size={20} /> : <Plus size={20} />}
          </button>
          <AnimatePresence>
            {openSection === "general" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 grid md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {generalFaqs.map((faq, idx) => (
                  <div key={idx}>
                    <p className="font-semibold mb-1">{faq.question}</p>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* E2E Related FAQ’s */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <button
            onClick={() => toggleSection("design")}
            className="flex justify-between w-full px-6 py-4 text-left font-medium text-lg"
          >
            <span>End to End Related FAQ’s</span>
            {openSection === "design" ? <X size={20} /> : <Plus size={20} />}
          </button>
          <AnimatePresence>
            {openSection === "design" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                 className="px-6 pb-6 grid md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {endToEndFaqs.map((faq, idx) => (
                  <div key={idx}>
                    <p className="font-semibold mb-1">{faq.question}</p>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Process Related FAQ’s */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <button
            onClick={() => toggleSection("web")}
            className="flex justify-between w-full px-6 py-4 text-left font-medium text-lg"
          >
            <span>Website Developement Related FAQ’s</span>
            {openSection === "web" ? <X size={20} /> : <Plus size={20} />}
          </button>
          <AnimatePresence>
            {openSection === "web" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                 className="px-6 pb-6 grid md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {websiteFaqs.map((faq, idx) => (
                  <div key={idx}>
                    <p className="font-semibold mb-1">{faq.question}</p>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Process Related FAQ’s */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <button
            onClick={() => toggleSection("process")}
            className="flex justify-between w-full px-6 py-4 text-left font-medium text-lg"
          >
            <span>Social Media Management Related FAQ’s</span>
            {openSection === "process" ? <X size={20} /> : <Plus size={20} />}
          </button>
          <AnimatePresence>
            {openSection === "process" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                 className="px-6 pb-6 grid md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {smmFaqs.map((faq, idx) => (
                  <div key={idx}>
                    <p className="font-semibold mb-1">{faq.question}</p>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
