// app/components/SearchBar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 w-64 h-screen bg-[#2e3c5c] shadow-md p-4 transition-transform duration-300"
      style={{ transform: `translateX(${isOpen ? 0 : 100}%)` }}
    >
      <h2 className="text-lg font-bold mb-4">User Profile</h2>
      <ul>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:text-gray-900"
          >
            Edit Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:text-gray-900"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:text-gray-900"
          >
            Logout
          </a>
        </li>
      </ul>
      <button
        className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleUserProfileClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Implement search functionality here, e.g., filtering books
  };

  const handleGoToCartClick = () => {
    router.push("/CartPage");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Search
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="bg-[#86367F] hover:bg-[#df1bcf] text-white font-bold py-2 px-4 rounded-md"
          onClick={handleGoToCartClick}
        >
          Go to cart
        </button>
        <button
          className="bg-[#F6828C] hover:bg-[#e22434] text-white font-bold py-2 px-4 rounded-md"
          onClick={handleUserProfileClick}
        >
          UserProfile
        </button>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
};

export default SearchBar;
