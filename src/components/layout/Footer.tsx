import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/fsf_transparent.png';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white py-12"
      style={{ backgroundColor: '#1f5a2d' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Find Street Food" className="h-16 w-auto" />

            <p className="text-white text-opacity-80 mb-4 max-w-md">
              Connecting food lovers with authentic street vendors and food trucks.
              Discover, enjoy, and support local food culture in your community.
            </p>
            <p className="text-sm text-white text-opacity-60">
              Part of the FindorLookup family of apps
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white text-opacity-70">
              <li>
                <a
                  href="#about"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#vendors"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  For Vendors
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-white text-opacity-70">
              <li>
                <Link
                  to="/privacy-policy"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid #2e8943' }}
        >
          <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
            © {currentYear} Find Street Food. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#4a9d5e'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}