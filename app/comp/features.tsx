"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Meetings got an <span className="underline decoration-blue-500">upgrade</span>
        </h2>
        <p className="text-gray-600">
          Templates, tasks, and meeting tools make it effortless to supercharge your meetings.
        </p>
      </div>

      {/* Layout Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-6xl w-full -mt-20">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-fit">
          {/* Automated Templates */}
          <div className="bg-gradient-to-tr from-orange-100 via-pink-100 to-purple-100 shadow-xl w-fit rounded-2xl overflow-hidden p-2 mt-28">
          <Image
              src="/website.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[550px] h-[300px] object-cover rounded-2xl"
            />
          </div>

          {/* Smart Tasks */}
          <div className="w-full flex items-end justify-end p-0">
        <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl p-2">

          <Image
              src="/SG.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[420px] h-[250px] object-cover rounded-2xl"
              />
              </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl overflow-hidden w-fit h-fit p-2">
        <Image
              src="/Social.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[350px] h-[550px] object-cover rounded-2xl"
            />
          
          {/* <h3 className="text-xl font-semibold mb-2 text-gray-900">Powerful Tools</h3>
          <p className="text-gray-700 mb-6">
            Meeting spaces come loaded with a growing kit of meeting tools that power up your meetings in a few clicks.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/40 backdrop-blur-md rounded-xl p-4 w-full max-w-sm mx-auto"
          >
            <svg width="100%" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="380" height="160" rx="10" fill="#fff" opacity="0.8" />
              <text x="30" y="45" fontSize="14" fill="#333">📝 Task List</text>
              <text x="30" y="70" fontSize="14" fill="#333">🔢 Numbered List</text>
              <text x="30" y="95" fontSize="14" fill="#333">😊 Emoji</text>
              <text x="30" y="120" fontSize="14" fill="#333">▶️ YouTube</text>
              <text x="30" y="145" fontSize="14" fill="#333">🎧 Spotify</text>
              <text x="30" y="170" fontSize="14" fill="#333">🖼 Figma</text>
            </svg>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
