
import { useState ,useEffect } from 'react';

import { 
  Terminal,  
  Menu, 
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
// NavBar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Terminal className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">Devin AI</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link  to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600/20 transition-colors duration-200">Home</Link>  
                <Link  to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600/20 transition-colors duration-200">Features</Link>  
                <Link  to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600/20 transition-colors duration-200">Use Cases</Link>  
                <Link  to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600/20 transition-colors duration-200">Pricing</Link>  
                <Link  to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600/20 transition-colors duration-200">Documentation</Link>  
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link  to="/login" className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium">Log in</Link>  
              <Link  to="" className="ml-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">Try for free</Link>  
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link  to="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>  
            <Link  to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</Link>  
            <Link  to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Use Cases</Link>  
            <Link  to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>  
            <Link  to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Documentation</Link>  
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2 space-y-1">
              <Link  to="#" className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium">Log in</Link>  
              <Link  to="#" className="block px-3 py-2 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">Try for free</Link>  
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar