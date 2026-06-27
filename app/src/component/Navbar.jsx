import Link from "next/link";

export default function Navbar() {
  return (<>
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-yellow-500">
          MGR Restaurant
        </h1>
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="/" className="hover:text-yellow-400 cursor-pointer">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-yellow-400 cursor-pointer">
              About
            </a>
          </li>

          <li>
            <a href="/menu" className="hover:text-yellow-400 cursor-pointer">
              Menu
            </a>
          </li>

          <li>
            <a href="/gallery" className="hover:text-yellow-400 cursor-pointer">
              Gallery
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-yellow-400 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </>);
}