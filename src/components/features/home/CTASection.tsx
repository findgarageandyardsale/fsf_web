import { Button } from "../../shared/ui/button";
import { Apple, Download } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(to right, #2e8943, #1e5a2d)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mb-6">🥗</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to taste the streets?
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of food lovers and vendors who are already using Find Street Food
          to discover and share amazing street food experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: 'white',
              color: '#2e8943'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            <Apple className="w-5 h-5 mr-2" />
            Download for iOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white hover:text-current transition-all"
            style={{
              borderColor: 'white',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#2e8943';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.color = 'white';
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download for Android
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-white text-opacity-80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
            <span className="text-sm">Free Download</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
            <span className="text-sm">No Registration Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full"></div>
            <span className="text-sm">Available Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}