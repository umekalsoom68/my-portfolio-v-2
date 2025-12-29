import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-10 px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h2 className="text-xl font-bold font-serif">Ume Kalsoom <span className="text-[#d9007b]">Rizvia</span></h2>
          <p className="text-gray-500 text-sm">BSCS Student | Frontend Developer</p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <Link href="https://github.com/umekalsoom68" target="_blank" className="hover:text-[#d9007b] transition-all">
            <Github size={22} />
          </Link>
          <Link href="https://www.linkedin.com/in/um-e-kalsoom-rizvia-495b59313" target="_blank" className="hover:text-[#d9007b] transition-all">
            <Linkedin size={22} />
          </Link>
          <Link href="https://www.instagram.com/aafffiii_68" target="_blank" className="hover:text-[#d9007b] transition-all">
            <Instagram size={22} />
          </Link>
          <Link href="https://www.youtube.com/@LearnWithUK-r3j" target="_blank" className="hover:text-[#d9007b] transition-all">
            <Youtube size={22} />
          </Link>
        </div>

        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}