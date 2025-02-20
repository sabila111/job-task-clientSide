import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Website Name */}
      <div className="text-xl font-bold">Task Manager</div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      {/* Login Button */}
      <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
