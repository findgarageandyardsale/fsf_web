import { Button } from "../shared/ui/button";
import logo from '../../assets/images/425a147b79e142da2ae3cfdd0e12c2f48da23b59.png';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Find Street Food" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('video')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#2e8943'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#2e8943'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#2e8943'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('vendors')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#2e8943'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              For Vendors
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#2e8943'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              How It Works
            </button>
          </nav>

          <Button
            className="text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#2e8943' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e5a2d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2e8943'}
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
}