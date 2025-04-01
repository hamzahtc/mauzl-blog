import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-1xl font-bold text-gray-900">Mauzl Blog</span>
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right: Search Box */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-2 rounded-md bg-gray-100 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
      </nav>
    </header>
  );
}
