import React from "react";

function Footer() {
  return (
    <footer className="mt-9 bg-gray-400 py-8 text-gray-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MEDVISTA</h3>
            <p className="text-sm">
              A platform to get your medical care to palms, medical outreach is
              made easy today
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>HOME</li>
              <li>DASHBOARD</li>
              <li>REGISTER</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shopper. All rights reserved.</p>
          <p className="mt-1">This is a real time store data manager </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
