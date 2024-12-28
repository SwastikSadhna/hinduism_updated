const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="text-white text-xl font-semibold">
              123done
            </a>
            <p className="mt-2 text-sm">Optimize your design process</p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Whats new
                </a>
              </li>
            </ul>
          </div>

          {/* Templates Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Templates</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Landing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Log in and Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dataviz Blocks
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm">
            Copyright © 2022 123done. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
