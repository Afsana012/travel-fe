import React from "react";
import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Pricing", "FAQ"],
  Company: ["About", "Blog", "Careers"],
  Legal: ["Privacy", "Terms", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image
            src="/images/logotb.png"
            alt="Travel Bucket"
            width={160}
            height={40}
            className="h-9 w-auto object-contain brightness-0 invert"
            priority
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
            Your ultimate travel planning companion for organizing dream
            destinations.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-semibold text-white mb-4">{heading}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-slate-700 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Travel Bucket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
