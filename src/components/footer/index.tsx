import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container max-sm:text-center mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shop Categories</h2>
            <p className="mb-2">Electronics</p>
            <p className="mb-2">Fashion</p>
            <p className="mb-2">Home & Office</p>
            <p className="mb-2">Phones & Tablets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
            <p className="mb-2">Contact Us</p>
            <p className="mb-2">FAQs</p>
            <p className="mb-2">Returns</p>
            <p className="mb-2">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex mb-2 item-center">
              <a href="#" className="mr-4">
                <FaFacebook
                  size={24}
                  className="text-gray-300 hover:text-blue-500"
                />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter
                  size={24}
                  className="text-gray-300 hover:text-blue-500"
                />
              </a>
              <a href="#" className="mr-4">
                <FaInstagram
                  size={24}
                  className="text-gray-300 hover:text-blue-500"
                />
              </a>
              <a href="#" className="mr-4">
                <FaYoutube
                  size={24}
                  className="text-gray-300 hover:text-red-500"
                />
              </a>
              <a href="#">
                <FaLinkedin
                  size={24}
                  className="text-gray-300 hover:text-blue-500"
                />
              </a>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Download Our App</h2>
            <p className="mb-4">Get access to exclusive offers!</p>
            <div className="flex">
              <a href="#" className="mr-4">
                <FaApple
                  size={32}
                  className="text-gray-300 hover:text-blue-500"
                />
              </a>
              <a href="#">
                <FaGooglePlay
                  size={32}
                  className="text-gray-300 hover:text-green-500"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="mt-3 text-center">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <p className="mb-4">Get the latest news and updates.</p>
            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your God's Gift. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
