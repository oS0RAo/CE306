import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MySite</div>
          
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Services</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;