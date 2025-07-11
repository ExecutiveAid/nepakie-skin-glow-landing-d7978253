import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SoapCarousel from '../components/SoapCarousel';
import ProductDetails from '../components/ProductDetails';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductDetails />
      <SoapCarousel />
      <Reviews />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-2xl font-light text-gray-800 mb-4">NEPAKIE</div>
              <p className="text-gray-600 mb-4">Papaya Brightening Bath Gel for radiant skin</p>
              <p className="text-sm text-gray-500">Distributed and marketed by The Sackey's Secret</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>📞 +233-264814013</p>
                <p>📧 info@nepakie.com</p>
                <p>📍 Lashibi Comm 17, GT-325-5519</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-500 text-sm">© 2024 NEPAKIE. All rights reserved.</p>
            </div>
            
            {/* Razorbill Technologies Credit */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Powered by{' '}
                <a 
                  href="https://executiveaid.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline decoration-1 underline-offset-2 hover:decoration-2 transition-all duration-200"
                >
                  Razorbill Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
