import Link from "next/link";
import { navLinks } from "@/constants/navigation";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition duration-300">
          DevQuest 🚀
        </div>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Link href="/dashboard">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}