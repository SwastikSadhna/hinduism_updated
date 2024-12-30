import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-full bg-gray-800 text-white mt-auto py-10 px-5">
      <div className="w-[80%] max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-10 text-sm mb-5">
          <a href="#product" className="hover:underline">
            Product
          </a>
          <a href="#resources" className="hover:underline">
            Resources
          </a>
          <a href="#templates" className="hover:underline">
            Templates
          </a>
          <a href="#company" className="hover:underline">
            Company
          </a>
        </div>
        <p>© 2022 123done. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
