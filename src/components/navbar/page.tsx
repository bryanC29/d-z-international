'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-stone-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo_short_white.png"
            className="h-8"
            alt="Dark & Dusky Logo"
            width={60}
            height={35}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Dark & Dusky
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`md:block w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-stone-800 md:bg-stone-900 border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/product  "
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Login <AccountCircleIcon className="md:pl-1" />
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Profile <AccountCircleIcon className="md:pl-1" />
              </Link>
            </li>
            <li>
              <Link
                href="/adminDashboard"
                className="block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
