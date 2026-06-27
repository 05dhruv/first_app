
export default function ContactPage() {
  return (
    <>

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
        <section className="text-center py-14">
          <h1 className="text-5xl font-bold text-yellow-500 pt-10">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            We'd love to hear from you. Visit us or send us a message.
          </p>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Details */}
            <div className="bg-zinc-900 rounded-xl p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 text-lg">

                <div>
                  <h3 className="text-yellow-400 font-semibold">
                    📍 Address
                  </h3>

                  <p className="text-gray-300">
                    Buddhi Vihar, Moradabad,
                    Uttar Pradesh, India
                  </p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">
                    📞 Phone
                  </h3>

                  <p className="text-gray-300">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">
                    ✉️ Email
                  </h3>

                  <p className="text-gray-300">
                    info@mgrrestaurant.com
                  </p>
                </div>

                <div>
                  <h3 className="text-yellow-400 font-semibold">
                    🕒 Opening Hours
                  </h3>

                  <p className="text-gray-300">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-300">
                    11:00 AM - 11:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 rounded-xl p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Send a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

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
    </>
  );
}