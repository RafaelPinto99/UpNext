"use client";
// import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
import Logo from "./Logo";
// import { getServerSession } from "next-auth";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-transparent p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#how-it-works" className="hover:text-gray-300">
              How It Works
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-gray-300">
              Contacts
            </a>
          </li>
          <li>
            <Link href="/download" className="hover:text-gray-300">
              Download Extension
            </Link>
          </li>
        </ul>

        {/* Right: Auth Links */}
        <div className="flex space-x-4 text-white">
          <Link href="/signup" className="orange-navbar-btn">
            Sign Up
          </Link>
          <Link href="/login" className="green-navbar-btn">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
