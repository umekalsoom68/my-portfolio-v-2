"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-5 flex justify-between items-center fixed top-0 w-full z-50 border-b border-zinc-800">
      
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-[#d9007b] w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl text-white">
          U
        </div>
        <span className="text-xl font-bold tracking-tight hidden sm:block">
          Ume Kalsoom
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 md:gap-10 text-[10px] md:text-sm font-medium uppercase tracking-widest">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all duration-300 pb-1 border-b-2 ${
                isActive 
                ? 'border-[#d9007b] text-white' 
                : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}