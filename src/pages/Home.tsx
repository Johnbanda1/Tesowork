import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Building Excellence in Zambia
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Quality construction, consultancy, and building materials for residential and commercial projects
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white text-purple-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Construction</h3>
              <p className="text-gray-600 mb-4">
                Premium residential and commercial construction services with modern techniques.
              </p>
              <Link to="/contact" className="text-red-600 hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Consultancy</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance for project planning, design, and management.
              </p>
              <Link to="/contact" className="text-red-600 hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Material Supply</h3>
              <p className="text-gray-600 mb-4">
                Quality building materials sourced from trusted partners.
              </p>
              <Link to="/contact" className="text-red-600 hover:text-red-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;