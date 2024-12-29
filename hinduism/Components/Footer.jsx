const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="text-white text-xl font-semibold">
              Sanatan
            </a>
            <p className="mt-2 text-sm">Vasudhaiva Kutumbakam</p>
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
            <h3 className="font-medium text-white mb-4">Authors</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Valmiki
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dayanand saraswati
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tulsidas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chanakya
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Adi Shankaracharya
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Books</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ramayana
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shrimad Bhagwad Gita
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                   Ramcharit Manas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shrimad Bhaagwatam
                </a>
              </li>
            </ul>
          </div>

          {/* Templates Column */}
          <div>
            <h3 className="font-medium text-white mb-4">Top Contents</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shlokas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mantras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sukta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Stotram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Suktam
                </a>
              </li>
            </ul>
          </div>

          
          
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm">
            Copyright © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
