import React from 'react';
import heroImg from "../assets/hero.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-50 w-full">
      {/* 🔹 Top Section */}
      <div className="flex flex-col items-center text-center  px-5 md:px-16 pt-0 md:pt-6 pb-0 space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            We Build <br /><span className="text-purple-600">Productive</span> Apps
          </h1>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaGooglePlay className="text-gray-600" /> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaApple className="text-gray-600" /> App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mt-6 mb-0">
          <img
            src={heroImg}
            alt="Hero Banner"
            className="w-[280px] md:w-[400px] lg:w-[450px] relative z-10"
          />
        </div>
      </div>

      {/* 🔹 States Section */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-14 px-5 text-center -mt-0">
        
        <h2 className="text-3xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">29.6M</h2>
            <p className="text-sm">Total Downloads</p>
            <p className="text-xs opacity-80">21% More Than Last Month</p>
          </div>

          {/* Card 2 */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">906K</h2>
            <p className="text-sm">Total Reviews</p>
            <p className="text-xs opacity-80">46% More Than Last Month</p>
          </div>

          {/* Card 3 */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">132+</h2>
            <p className="text-sm">Active Apps</p>
            <p className="text-xs opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;