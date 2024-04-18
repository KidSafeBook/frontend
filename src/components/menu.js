import React from "react";

/**
 * Menu component.
 * 
 * @returns {*} - JSX component.
 */
const Menu = () => {
  return (
    <nav className="text-white p-4">
      <ul className="flex justify-between items-center">
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">Services</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
