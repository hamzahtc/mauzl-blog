import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-16 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm">
            <strong>Email:</strong> info@jstemplate.net
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> 880 123 456 789
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Archived</a>
            </li>
            <li>
              <a href="#">Author</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Category</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Economy</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Weekly Newsletter</h4>
            <p className="text-sm mb-4">
              Get blog articles and offers via email
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-4 pr-10 py-2 rounded-md bg-gray-100 text-sm outline-none"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t text-sm py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Mauzl Blog</span>
          <span>© 2025 All Rights Reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
