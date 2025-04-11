import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between sm:items-center">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <h1 className="text-2xl font-bold text-gray-900">Rapid Garage Doors</h1>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop links and phone numbers */}
        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-x-8 mt-4 sm:mt-0">
          <div className="space-x-6">
            <button onClick={() => scrollTo("#repairs")} className="text-gray-700 hover:text-yellow-600 font-medium">Services</button>
            <button onClick={() => scrollTo("#gallery")} className="text-gray-700 hover:text-yellow-600 font-medium">Gallery</button>
            <button onClick={() => scrollTo("#about")} className="text-gray-700 hover:text-yellow-600 font-medium">About</button>
            <button onClick={() => scrollTo("#contact")} className="text-gray-700 hover:text-yellow-600 font-medium">Contact</button>
          </div>
          <div className="text-sm text-gray-700 ml-6">
            📞 <span className="font-medium">Broward:</span> <a href="tel:9548822728" className="hover:text-yellow-600">954-882-2728</a><br />
            📞 <span className="font-medium">WPM:</span> <a href="tel:5616993222" className="hover:text-yellow-600">561-699-3222</a>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <button onClick={() => scrollTo("#repairs")} className="block w-full text-left text-gray-700 hover:text-yellow-600 font-medium">Services</button>
          <button onClick={() => scrollTo("#gallery")} className="block w-full text-left text-gray-700 hover:text-yellow-600 font-medium">Gallery</button>
          <button onClick={() => scrollTo("#about")} className="block w-full text-left text-gray-700 hover:text-yellow-600 font-medium">About</button>
          <button onClick={() => scrollTo("#contact")} className="block w-full text-left text-gray-700 hover:text-yellow-600 font-medium">Contact</button>
          <div className="pt-4 text-sm text-gray-700 border-t border-gray-200">
            📞 <strong>Broward:</strong> <a href="tel:9548822728" className="hover:text-yellow-600">954-882-2728</a><br />
            📞 <strong>WPM:</strong> <a href="tel:5616993222" className="hover:text-yellow-600">561-699-3222</a>
          </div>
        </div>
      )}
    </nav>
  );
}
