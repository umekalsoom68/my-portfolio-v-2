
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-zinc-800">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="bg-[#d9007b] w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
          U 
        </div>
        <span className="text-xl font-semibold tracking-tight">Ume Kalsoom </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link href="/" className="border-b-2 border-[#d9007b] pb-1">Home </Link>
        <Link href="#skills" className="hover:text-gray-400 transition">Skills </Link>
        <Link href="#projects" className="hover:text-gray-400 transition">Projects </Link>
        <Link href="#about" className="hover:text-gray-400 transition">About </Link>
        <Link href="#contact" className="hover:text-gray-400 transition">Contact </Link>
      </div>
    </nav>
  );
}