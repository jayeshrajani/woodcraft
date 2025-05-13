'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkStyle = (href: string) =>
    `transition-colors duration-200 ${
      pathname === href ? 'text-[#6d4c41] font-bold' : 'text-[#4b4b4b] font-light'
    } hover:text-[#6d4c41]`;

  return (
    <nav className="w-full bg-[#f7f5f0]/70 backdrop-blur-md border-b border-[#eae6df] px-6 sm:px-12 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-semibold text-[#3e2f1c] tracking-tight">
          woodcraft
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkStyle(link.href)}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3e2f1c]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`${
          isOpen
            ? 'opacity-100 translate-y-0 visible h-auto'
            : 'opacity-0 translate-y-4 invisible h-0'
        } md:hidden flex flex-col mt-2 space-y-3 px-4 pb-4 text-sm transition-all duration-300 ease-in-out bg-[#f7f5f0]/90 rounded-lg shadow-lg`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={linkStyle(link.href)}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
