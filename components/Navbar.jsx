"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { mobileMenuItems, navItems } from "@/lib/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container relative m-auto flex items-center justify-between lg:justify-around p-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              News
            </span>
          </Link>
          <ThemeSwitcher />
        </div>
        <button className="lg:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <ul className="hidden lg:flex items-center space-x-6 text-lg">
          <NavbarItems />
        </ul>

        {isMenuOpen && (
          <ul className="absolute left-0 z-30 top-full w-full bg-white dark:bg-gray-800 shadow-md lg:hidden flex flex-col space-y-4 p-4">
            {mobileMenuItems.map((item, index) => (
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link
                  href={item.href}
                  title={item.name}
                  className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

export const NavbarItems = () => {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className="relative group">
          {item.children?.length ? (
            <>
              <button
                className="py-2 px-3 text-blue-500 rounded-sm dark:text-white flex items-center focus:outline-none"
                type="button"
              >
                {item.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 top-full mt-2 min-w-[150px] bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-20">
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      {subItem.name || subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={item.href}
              className="py-2 px-3 text-blue-500 rounded-sm dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};
