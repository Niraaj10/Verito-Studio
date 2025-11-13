'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Anton } from 'next/font/google';
import Image from 'next/image';

const sans = Anton({
  subsets: ['latin'],
  weight: '400',
});

const plans = [
  {
    name: 'Website Development',
    price: 'By Consultation',
    period: 'per project',
    features: [
      'Brand Discovery & Strategy',
      'Custom Website Design (UI/UX)',
      'Responsive Development (Next.js)',
      'Content Integration & On-page SEO',
      'Speed & Performance Optimization',
      'Domain, Hosting & Launch Support',
      'CMS Integration (optional)',
      'Analytics Setup',
      'Post-launch Support',
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'End to End',
    price: 'Let’s Talk',
    period: '/month',
    features: [
      'Everything in Website Development',
      'Everything in Social Media Management',
      'Brand Strategy & Visual Identity Revamp',
      'High-Impact Content Creation (Photo + Video)',
      'Planning & Managing Content Shoots',
      'World-Class Editing (20–25 Edits per Month)',
      'Organic Lead Generation Strategies',
      'Monthly Growth Reports & Analytics Review',
      'Dedicated Project Manager',
      'Month-to-Month Flexibility',
    ],
    buttonText: 'Get Started',
    badge: 'Popular',
  },
  {
    name: 'Social Media Management',
    price: 'On Request',
    period: '/month',
    features: [
      'Social Media Strategy & Content Calendar',
      'Content Ideation & Creative Direction',
      'Reels, Carousels & Visual Design',
      'Copywriting & Captions',
      'Scheduling & Posting Across Platforms',
      'Community Engagement & Replies',
      'Monthly Growth Reports',
      'Check-in Calls & Optimization',
    ],
    buttonText: 'Get Started',
  },
];

export default function PricingSection() {
  // Default highlight = middle plan (index 1)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  return (
    <section className="py-20 bg-gray-50 flex flex-col items-center">
      <div className="relative text-center max-w-3xl mb-10">
        <Image
          src="/three.svg"
          alt="Automated Templates"
          width={100}
          height={100}
          className="absolute -top-8 -rotate-12 -right-14 w-[300px] h-[50px] z-0"
        />
        <h2
          className={`${sans.className} relative text-4xl font-bold text-gray-900 mb-4`}
        >
          Ready to elevate your brand?
        </h2>
        <p className="text-gray-600">
          Let's discuss how we can transform your digital presence with strategic creativity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {plans.map((plan, idx) => {
          const isHighlighted = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(1)} // return highlight to middle
              className={`relative border rounded-3xl shadow-lg p-8 flex flex-col justify-between transition-all duration-300 transform ${
                isHighlighted
                  ? 'scale-105 text-white'
                  : 'bg-white hover:scale-105 transition-all duration-700'
              }`}
            >
              {/* Header */}
              <div
                className={`rounded-2xl p-4 mb-6 transition-all duration-100 ${
                  isHighlighted
                    ? 'bg-gradient-to-tr from-[#012cfa] to-blue-400 text-white transition-all duration-300'
                    : 'bg-gradient-to-tr from-gray-50 to-gray-100 transition-all duration-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      isHighlighted
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.badge && (
                    <span className="text-sm bg-yellow-300 text-gray-900 font-medium px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <span className="text-3xl font-bold">{plan.name}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-center text-sm ${
                      isHighlighted ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    <Check
                      size={18}
                      className={`mr-2 ${
                        isHighlighted ? 'text-green-500' : 'text-green-500'
                      }`}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`mt-auto cursor-pointer w-full py-3 rounded-2xl font-medium shadow-md transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-black text-white hover:shadow-xl'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.buttonText}
              </button>

              {isHighlighted && (
                <p className="text-center text-gray-500 text-xs mt-3 opacity-80">
                  Cancel Anytime
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
