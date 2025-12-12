import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navClass = ({ isActive }) =>
    `px-3 py-2 text-lg font-medium ${
      isActive ? "text-green-600" : "text-gray-800"
    } hover:text-green-600`;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm shadow"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-green-600">
          SwiftRooter
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          <li><NavLink to="/" className={navClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={navClass}>Services</NavLink></li>
          <li><NavLink to="/about" className={navClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
        </ul>

        {/* UPDATED BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/template"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Get Template
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(v => !v)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-3 bg-white">
          <NavLink onClick={() => setOpen(false)} to="/" className="py-2">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className="py-2">Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className="py-2">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className="py-2">Contact</NavLink>

          {/* MOBILE UPDATED BUTTON */}
          <Link
            to="/template"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg text-center"
          >
            Get Template
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
