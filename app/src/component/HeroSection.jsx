import Image from "next/image";

export default function Home() {
  const foods = [
    {
      title: "North Indian",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    },
    {
      title: "Chinese",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    },
    {
      title: "Continental",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* Navbar */}

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

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >

        <div className="bg-black/60 p-10 rounded-xl text-center">

          <h1 className="text-6xl font-bold mb-5">
            Welcome to
            <span className="text-yellow-500"> MGR Restaurant</span>
          </h1>

          <p className="text-xl text-gray-300">
            Experience Fine Dining in Moradabad
          </p>

<a
  href="/booktable"
  className="mt-8 inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-bold"
>
  Book a Table
</a>

        </div>

      </section>

      {/* About */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">
          About Us
        </h2>

        <p className="text-center text-lg text-gray-300 leading-8">
          MGR Restaurant offers an unforgettable dining experience with Indian,
          Chinese, Continental and Biryani cuisine in a luxurious ambience.
          Perfect for family dinners, birthday parties and celebrations.
        </p>

      </section>

      {/* Why Choose */}

      <section className="bg-zinc-900 py-24">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-14">
          Why Choose MGR?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

          {[
            "Premium Ambience",
            "Expert Chefs",
            "Fresh Ingredients",
            "Family Friendly",
          ].map((item) => (
            <div
              key={item}
              className="bg-black rounded-xl p-8 text-center hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-semibold">{item}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* Featured Food */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-14">
          Featured Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {foods.map((food) => (
            <div
              key={food.title}
              className="bg-zinc-900 rounded-xl overflow-hidden"
            >
              <img
                src={food.image}
                className="h-72 w-full object-cover"
                alt={food.title}
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {food.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-500 text-black py-20 text-center">

        <h2 className="text-5xl font-bold">
          Reserve Your Table Today
        </h2>

        <button className="mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-zinc-800">
          Book Now
        </button>

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