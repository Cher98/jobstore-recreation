"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full p-5 relative flex justify-around lg:justify-between overflow-hidden overflow-x-auto">
      <div className="flex items-center gap-10">
        <Image
          src={"/jobstore_logo_blue.png"}
          alt="logo"
          width={150}
          height={150}
        />
        <div className="hidden lg:flex gap-3 text-sm font-semibold text-gray-500">
          <p>Companies</p>
          <p>MyCareerFair</p>
          <p>Awards</p>
          <p>Campus Fair</p>
          <p>Training</p>
          <p>News</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3 text-sm font-semibold text-gray-500">
        <p>Sign In</p>
        <p>Sign Up</p>
        <Button className={"bg-[#fe7e00] rounded-full p-6 font-bold"}>
          Employers
        </Button>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b">
            <Image
              src={"/jobstore_logo_blue.png"}
              alt="logo"
              width={120}
              height={120}
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 px-5 py-4">
            <nav className="space-y-4">
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                Companies
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                MyCareerFair
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                Awards
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                Campus Fair
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                Training
              </a>
              <a
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                onClick={toggleMobileMenu}
              >
                News
              </a>
            </nav>
          </div>
          <div className="p-5 border-t space-y-3">
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold text-center"
              onClick={toggleMobileMenu}
            >
              Sign In
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md font-semibold text-center"
              onClick={toggleMobileMenu}
            >
              Sign Up
            </a>
            <Button
              className="w-full bg-[#fe7e00] rounded-full p-4 font-bold"
              onClick={toggleMobileMenu}
            >
              Employers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
