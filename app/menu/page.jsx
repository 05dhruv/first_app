
export default function MenuPage() {
  const menuItems = [
    {
      category: "🍛 North Indian",
      items: [
        { name: "Paneer Butter Masala", price: "₹280" },
        { name: "Dal Makhani", price: "₹220" },
        { name: "Shahi Paneer", price: "₹270" },
        { name: "Butter Naan", price: "₹50" },
      ],
    },
    {
      category: "🍜 Chinese",
      items: [
        { name: "Veg Hakka Noodles", price: "₹220" },
        { name: "Veg Fried Rice", price: "₹210" },
        { name: "Chilli Paneer", price: "₹260" },
        { name: "Manchurian", price: "₹240" },
      ],
    },
    {
      category: "🍕 Continental",
      items: [
        { name: "White Sauce Pasta", price: "₹320" },
        { name: "Grilled Sandwich", price: "₹180" },
        { name: "French Fries", price: "₹150" },
        { name: "Cheese Pizza", price: "₹420" },
      ],
    },
    {
      category: "🥘 Biryani",
      items: [
        { name: "Veg Biryani", price: "₹260" },
        { name: "Hyderabadi Biryani", price: "₹340" },
        { name: "Paneer Biryani", price: "₹300" },
        { name: "Chicken Biryani", price: "₹380" },
      ],
    },
    {
      category: "🥤 Beverages",
      items: [
        { name: "Cold Coffee", price: "₹180" },
        { name: "Fresh Lime Soda", price: "₹120" },
        { name: "Mango Shake", price: "₹170" },
        { name: "Mineral Water", price: "₹30" },
      ],
    },
    {
      category: "🍨 Desserts",
      items: [
        { name: "Brownie with Ice Cream", price: "₹220" },
        { name: "Gulab Jamun", price: "₹120" },
        { name: "Ice Cream", price: "₹150" },
        { name: "Chocolate Sundae", price: "₹200" },
      ],
    },
  ];

  return (
    <>
      

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
        <section className="text-center py-14 ">
          <h1 className="text-5xl font-bold text-yellow-500 pt-10">
            Our Menu
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Taste the Best Dishes at MGR Restaurant
          </p>
        </section>

        {/* Menu Cards */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {menuItems.map((section) => (
              <div
                key={section.category}
                className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:scale-105 duration-300"
              >
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                  {section.category}
                </h2>

                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between border-b border-gray-700 py-3"
                  >
                    <span>{item.name}</span>
                    <span className="text-yellow-500 font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
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

      
    </>
  );
}