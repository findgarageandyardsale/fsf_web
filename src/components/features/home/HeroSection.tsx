import { Button } from "../../shared/ui/button";
import { Download, Apple } from "lucide-react";
import truck from '../../../assets/images/truck1.jpg';


export function HeroSection() {
  return (
    <section
      className="pt-24 pb-16"
      style={{ background: 'linear-gradient(to bottom right, #f0f9f2, #dcf3e1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Stop Searching.
              <span style={{ color: '#2e8943' }}> Start Tasting.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect instantly with street food vendors near you. Discover authentic flavors, support local businesses, and never miss your favorite food truck again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#2e8943' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e5a2d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2e8943'}
              >
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-opacity-20 transition-all"
                style={{
                  borderColor: '#2e8943',
                  color: '#2e8943'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(74, 157, 94, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Free to download • Available on all devices
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img src={truck} alt="Find Street Food Hero" className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl" />
          
            </div>

            {/* Floating food icons */}
            <div
              className="absolute -top-8 -left-8 w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-bounce"
              style={{ backgroundColor: '#4a9d5e' }}
            >
              🥗
            </div>
            <div
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl animate-pulse"
              style={{ backgroundColor: '#2e8943' }}
            >
              🥬
            </div>
            <div
              className="absolute -bottom-8 -left-4 w-14 h-14 rounded-full flex items-center justify-center text-xl animate-bounce delay-300"
              style={{ backgroundColor: '#8dd5a3' }}
            >
              🥒
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}