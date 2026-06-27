
export default function BookTable() {
  return (
    <>
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

      <main className="bg-black text-white min-h-screen pt-28">

        {/* Hero Section */}
        <section className="text-center py-14">
          <h1 className="text-5xl font-bold text-yellow-500">
            Book a Table
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Reserve your table and enjoy an unforgettable dining experience.
          </p>
        </section>

        {/* Booking Form */}
        <section className="max-w-3xl mx-auto px-6 pb-20">

          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl">

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 text-yellow-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-yellow-400">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-yellow-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                />
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 text-yellow-400">
                    Date
                  </label>

                  <input
                    type="date"
                    className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-yellow-400">
                    Time
                  </label>

                  <input
                    type="time"
                    className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                  />
                </div>

              </div>

              {/* Guests */}
              <div>
                <label className="block mb-2 text-yellow-400">
                  Number of Guests
                </label>

                <select className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6+ People</option>
                </select>
              </div>

              {/* Special Request */}
              <div>
                <label className="block mb-2 text-yellow-400">
                  Special Request
                </label>

                <textarea
                  rows="5"
                  placeholder="Any special request..."
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:border-yellow-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Reserve Table
              </button>

            </form>

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

    </>
  );
}