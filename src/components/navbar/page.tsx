'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '../../app/context/authContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinkClass =
    'block py-2 px-3 text-white hover:bg-stone-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:p-0';

  return (
    <nav className="bg-stone-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo_short_white.png"
            alt="Logo"
            width={60}
            height={35}
          />
          <span className="text-white text-2xl font-semibold">
            Dark & Dusky
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`md:block w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 bg-stone-800 md:bg-stone-900 p-4 md:p-0 rounded-lg md:border-0 border border-gray-700">
            <li>
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className={navLinkClass}>
                Categories
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/cart" className={navLinkClass}>
                  Cart
                </Link>
              </li>
            )}
            <li>
              <Link href="/product" className={navLinkClass}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navLinkClass}>
                Contact us
              </Link>
            </li>

            {!user && (
              <li>
                <Link href="/login" className={navLinkClass}>
                  Login <AccountCircleIcon className="md:pl-1" />
                </Link>
              </li>
            )}

            {user && (
              <>
                <li>
                  <Link href="/profile" className={navLinkClass}>
                    Profile <AccountCircleIcon className="md:pl-1" />
                  </Link>
                </li>

                {user.role === 'admin' && (
                  <li>
                    <Link href="/adminDashboard" className={navLinkClass}>
                      Admin
                    </Link>
                  </li>
                )}

                <li>
                  <button onClick={logout} className={navLinkClass}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
