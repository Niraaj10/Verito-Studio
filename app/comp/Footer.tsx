"use client";

import { ArrowRight, Instagram, Mail, MapPin, Phone, Waves, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full flex justify-center py-20 bg-white mb-96">
            <div className="w-full max-w-6xl bg-black mb-12 text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-12 relative">

                {/* LEFT SECTION */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 bg-zinc-800 rounded-xl p-1">
                            <Image
                                alt="Verito Studio"
                                src='/images/image.png'
                                height={100}
                                width={100}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="leading-tight">
                            <p className="font-semibold">Verito</p>
                            <p className="text-sm text-gray-400">Studio</p>
                        </div>
                    </div>

                    <p className="text-gray-400 mt-4">Verito Studio crafts powerful digital identities through websites, social media, and content that help brands grow, convert, and stand out online.</p>

                    <h3 className="text-xl md:text-2xl font-semibold leading-snug mt-6">
                        Let’s Build Your Digital Presence
                    </h3>


                    <button className="relative w-1/2 bg-zinc-900 text-sm text-gray-300 border border-zinc-800 rounded-2xl px-4 py-3 pr-10 outline-none flex mt-3">
                        Swipe
                        <span className="absolute top-1/2 -translate-y-1/2 right-1 bg-zinc-800 rounded-lg p-2 hover:bg-zinc-700 transition">
                            <ArrowRight size={16} />
                        </span>
                    </button>

                </div>

                {/* CENTER SECTION */}
                <div className="flex gap-10 w-md relative py-10 text-gray-400 ">
                    {/* vertical divider */}
                    <div className="hidden md:block absolute left-0 top-10 w-px h-[70%]  bg-zinc-800" />

                        <div className="mx-9 text-gray-300 flex flex-col justify-center items-center gap-4">
                            <p className="hover:text-white text-gray-400 transition-all duration-200  cursor-pointer">About Us</p>
                            <p className="hover:text-white text-gray-400 transition-all duration-200  cursor-pointer">Resources</p>
                            <p className="hover:text-white text-gray-400 transition-all duration-200  cursor-pointer">Contact</p>
                            <p className="hover:text-white text-gray-400 transition-all duration-200 cursor-pointer">Blog</p>
                        </div>

                        <div className=" w-full text-gray-300 flex flex-col justify-center items-start gap-4">
                            <p className="hover:text-white text-gray-400 transition-all duration-200  cursor-pointer items-start flex gap-2">
                                <MapPin /> Pune
                            </p>
                            <p className="hover:text-white text-gray-400 transition-all duration-200  cursor-pointer flex gap-2">
                                <Mail /> studio.verito@gmail.com
                            </p>
                        </div>

                    {/* Right divider */}
                    <div className="hidden md:block absolute right-0 top-10 w-px h-[70%] bg-zinc-800" />
                </div>

                {/* RIGHT SOCIAL BUTTONS */}
                <div className="flex flex-col items-center gap-4 justify-center">
                    <button className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition">
                        <Instagram size={18} />
                    </button>
                    <button className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition">
                        {/* <Behance size={18} /> */}
                        <X size={18} />
                    </button>
                    {/* <button className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition">
                        <Waves size={18} />
                    </button>
                    <button className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition">
                        <Waves size={18} />
                    </button> */}
                </div>

            </div>
        </footer>
    );
}
