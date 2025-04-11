export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Rapid Garage Doors</h2>
            <p className="text-sm text-gray-400">Serving with speed & quality.</p>
            <p className="text-sm text-gray-400 mt-2">
               <strong>Broward:</strong> <a href="tel:9548822728" className="hover:text-yellow-400">954-882-2728</a>
            </p>
            <p className="text-sm text-gray-400">
               <strong>West Palm Beach:</strong> <a href="tel:5616993222" className="hover:text-yellow-400">561-699-3222</a>
            </p>
          </div>
  
          <div className="space-x-6 text-sm">
            <a href="#repairs" className="hover:text-yellow-400">Services</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
  
          <div className="text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Rapid Garage Doors
          </div>
        </div>
      </footer>
    );
  }
  