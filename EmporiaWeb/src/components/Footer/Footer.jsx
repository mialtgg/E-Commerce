const Footer = () => {
  return (
    <footer className="bg-[#1a1a1e] text-gray-400 py-12 px-6 w-full">
      <div className="max-w-[95%] mx-auto grid grid-cols-4 gap-8">
        {/* Başlıklar */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Shop</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Collections
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-4">Start</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                Get Started
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Tutorials
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-4">Info</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sağ Taraf - Contact ve Follow Us */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">
            Sign up to stay updated with our latest products and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded">
            Subscribe
          </button>

          <div className="mt-8">
            <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-white">
                Facebook
              </a>
              <a href="/" className="hover:text-white">
                Twitter
              </a>
              <a href="/" className="hover:text-white">
                Instagram
              </a>
              <a href="/" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
