import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen">

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
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-yellow-500">
                        About MGR Restaurant
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Taste • Quality • Hospitality
                    </p>
                </div>
            </section>

            {/* About */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
                        alt="Restaurant"
                        className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                    />

                    <div>
                        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
                            Welcome to MGR Restaurant
                        </h2>

                        <p className="text-gray-300 leading-8 mb-6">
                            MGR Restaurant is one of Moradabad's favourite dining
                            destinations, offering a premium experience with delicious food,
                            elegant interiors and warm hospitality.
                        </p>

                        <p className="text-gray-300 leading-8">
                            Our menu includes North Indian, Chinese, Continental, Mughlai,
                            Biryani, Tandoori and a wide variety of desserts. Whether you're
                            celebrating a birthday, enjoying dinner with family or planning a
                            special event, MGR Restaurant provides the perfect atmosphere.
                        </p>
                    </div>

                </div>
            </section>

            {/* Mission */}
            <section className="bg-zinc-900 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-yellow-500 mb-10">
                        Our Mission
                    </h2>

                    <p className="text-lg text-gray-300 leading-8 max-w-4xl mx-auto">
                        Our mission is to serve fresh, hygienic and delicious food while
                        creating unforgettable dining experiences. We believe great food
                        brings people together, and every guest should leave with a smile.
                    </p>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 max-w-6xl mx-auto px-6">

                <h2 className="text-center text-4xl font-bold text-yellow-500 mb-14">
                    Why Choose Us?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-zinc-900 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            👨‍🍳 Expert Chefs
                        </h3>
                        <p className="text-gray-300">
                            Experienced chefs preparing every dish with passion and perfection.
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            🍽 Premium Dining
                        </h3>
                        <p className="text-gray-300">
                            Elegant interiors, comfortable seating and a luxurious atmosphere.
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            ❤️ Fresh Ingredients
                        </h3>
                        <p className="text-gray-300">
                            We use high-quality fresh ingredients to ensure the best taste and
                            hygiene.
                        </p>
                    </div>

                </div>

            </section>

            {/* Stats */}
            <section className="bg-yellow-500 text-black py-20">

                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

                    <div>
                        <h2 className="text-5xl font-bold">10+</h2>
                        <p>Years Experience</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">50+</h2>
                        <p>Food Items</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">20K+</h2>
                        <p>Happy Customers</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">4.5★</h2>
                        <p>Customer Rating</p>
                    </div>

                </div>

            </section>

            {/* Footer */}
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