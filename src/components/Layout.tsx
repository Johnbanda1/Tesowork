import { Fragment } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Teso Works Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-purple-900">Teso Works</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about"
              className={`text-gray-700 hover:text-purple-900 transition-colors ${
                location.pathname === '/about' ? 'text-purple-900' : ''
              }`}
            >
              About
            </Link>
            
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-700 hover:text-purple-900">
                Our Commitment
                <ChevronDown className="ml-1 h-4 w-4" />
              </Menu.Button>
              
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/commitment/sustainability"
                        className={`${
                          active ? 'bg-purple-50 text-purple-900' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        Sustainability
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/commitment/safety"
                        className={`${
                          active ? 'bg-purple-50 text-purple-900' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        Safety
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/commitment/quality"
                        className={`${
                          active ? 'bg-purple-50 text-purple-900' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        Quality
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            
            <Link 
              to="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            {/* Mobile menu button */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="/images/logo.png" alt="Teso Works Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold">Teso Works</span>
              </div>
              <p className="text-gray-300">
                Quality construction services and building materials across Zambia since 2013.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Commitment</h3>
              <ul className="space-y-2">
                <li><Link to="/commitment/sustainability" className="text-gray-300 hover:text-white">Sustainability</Link></li>
                <li><Link to="/commitment/safety" className="text-gray-300 hover:text-white">Safety</Link></li>
                <li><Link to="/commitment/quality" className="text-gray-300 hover:text-white">Quality</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Plot No. 6, Pelican Street</li>
                <li>Salama Park, Lusaka</li>
                <li>Phone: +260 977 120 664</li>
                <li>Email: info@tesoworks.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Teso Works & Supply Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;