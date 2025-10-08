import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm px-5 lg:px-10">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold"
                    : "text-black"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold"
                    : "text-black"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero.io Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-purple-500">HERO.IO</span>
        </Link>
      </div>

      {/* Center Menu (Desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 underline underline-offset-4"
                  : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 underline underline-offset-4"
                  : "text-black"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-500 underline underline-offset-4"
                  : "text-black"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        <a
          href="https://github.com/Kanonkafi/my-eight-assignment.git"
          target="_blank"
          rel="noreferrer"
          className="btn bg-purple-500 hover:bg-purple-600 text-white border-none flex items-center gap-2"
        >
          <FaGithub size={18} /> Contribute
        </a>
      </div>
    </div>
    );
};

export default Navbar;