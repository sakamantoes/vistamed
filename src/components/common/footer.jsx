import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-9 bg-gray-400 py-8 text-gray-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="">privacy</Link>
          <Link to="">policy</Link>
          <Link to="">Terms of sercive</Link>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} MEDVISTA. LIMITED All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
