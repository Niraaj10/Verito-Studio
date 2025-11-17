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
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-600 mb-4">
          ✨ FAQs
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Got questions? Find the answers below
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base px-2">
          Check out the answers to our most common questions below. We've compiled
          details on everything you need to know to get started and feel confident.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {[
          { key: "general", label: "General FAQ’s", data: generalFaqs },
          { key: "design", label: "End to End Related FAQ’s", data: endToEndFaqs },
          { key: "web", label: "Website Development Related FAQ’s", data: websiteFaqs },
          { key: "process", label: "Social Media Management Related FAQ’s", data: smmFaqs },
        ].map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border">
            {/* Button */}
            <button
              onClick={() => toggleSection(section.key)}
              className="flex justify-between items-center w-full px-5 md:px-6 py-4 text-left font-medium text-base md:text-lg"
            >
              <span>{section.label}</span>
              {openSection === section.key ? <X size={20} /> : <Plus size={20} />}
            </button>

            {/* Animated Content */}
            <AnimatePresence>
              {openSection === section.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-6 grid gap-y-6 gap-x-8 sm:grid-cols-1 md:grid-cols-2">
                    {section.data.map((faq, i) => (
                      <div key={i} className="pr-2">
                        <p className="font-semibold text-base md:text-lg mb-1">
                          {faq.question}
                        </p>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>

  );
}
