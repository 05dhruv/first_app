export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            MGR Restaurant
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Experience delicious food, premium ambience and unforgettable
            hospitality in the heart of Moradabad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/menu" className="hover:text-yellow-500">Menu</a></li>
            <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400">
            📍 Buddhi Vihar,<br />
            Moradabad, Uttar Pradesh
          </p>

          <p className="mt-3 text-gray-400">
            📞 +91 98765 43210
          </p>

          <p className="mt-3 text-gray-400">
            ✉️ info@mgrrestaurant.com
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Opening Hours
          </h3>

          <p className="text-gray-400">
            Monday - Sunday
          </p>

          <p className="text-gray-400">
            11:00 AM - 11:00 PM
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 MGR Restaurant | All Rights Reserved.
      </div>
    </footer>
  );
}