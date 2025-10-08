import React from 'react';
import { FaTwitter, FaMediumM, FaFacebookF } from 'react-icons/fa';
import logo from "../assets/logo.png";
const Footer = () => {
    return (
        <div>
         <footer className="w-full bg-[#001931] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* --- Top Section: Logo and Social Links --- */}
                <div className="
                    flex flex-col md:flex-row 
                    justify-between items-center 
                    pb-6 border-b border-gray-700/50
                ">
                    
                    {/* Logo (HERO.IO) */}
                    <div className="flex items-center mb-4 md:mb-0">
                       
                        <img src={logo} alt="HERO.IO Logo" className="h-6 mr-2" />
                        <span className="text-xl font-bold tracking-wider">
                            HERO.IO
                        </span>
                    </div>

                    {/* Social Links Container */}
                    <div className="text-center md:text-right">
                        <span className="text-lg font-semibold block mb-3 md:mb-2">
                            Social Links
                        </span>
                        
                        {/* Icons */}
                        <div className="flex justify-center md:justify-end space-x-4">
                            
                            {/* Twitter */}
                            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors duration-200">
                                <FaTwitter size={20} />
                            </a>
                            
                            {/* Medium */}
                            <a href="#" aria-label="Medium" className="text-white hover:text-gray-400 transition-colors duration-200">
                                <FaMediumM size={20} />
                            </a>
                            
                            {/* Facebook */}
                            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600 transition-colors duration-200">
                                <FaFacebookF size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Bottom Section: Copyright --- */}
                <div className="pt-4 text-center text-sm text-gray-400">
                    Copyright &copy; 2025 - All right reserved
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;