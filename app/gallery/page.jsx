
export default function GalleryPage() {

  const gallery = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  ];

  return (
    

      <main className="bg-black text-white min-h-screen ">
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
        {/* Hero */}
        <section className="text-center py-14">
          <h1 className="text-5xl font-bold text-yellow-500 pt-10">
            Our Gallery
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Explore the beautiful ambience and delicious dishes of MGR Restaurant.
          </p>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </section>
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
      </main>

    
  );
}