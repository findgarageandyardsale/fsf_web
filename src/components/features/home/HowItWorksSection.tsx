import { Download, Search, MapPin } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Download the app",
      description: "Get Find Street Food from the App Store or Google Play for free",
      color: "blue"
    },
    {
      icon: Search,
      title: "Search or list spots",
      description: "Find amazing food near you or list your own street food business",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Enjoy and share",
      description: "Discover new flavors, support local vendors, and share your experiences",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'rgba(74, 157, 94, 0.3)', icon: '#2e8943', border: '#8dd5a3' };
      case 'orange':
        return { bg: 'rgba(46, 137, 67, 0.3)', icon: '#1e5a2d', border: '#4a9d5e' };
      case 'green':
        return { bg: 'rgba(31, 90, 45, 0.3)', icon: '#1f5a2d', border: '#2e8943' };
      default:
        return { bg: 'bg-gray-100', icon: 'text-gray-600', border: 'border-gray-200' };
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="py-16"
      style={{ background: 'linear-gradient(to bottom right, #FEFCF7, #f0f9f2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Find Street Food is simple. Follow these three easy steps 
            to discover amazing street food or grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = getColorClasses(step.color);
            
            return (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600 text-sm">
                  {index + 1}
                </div>
                
                <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-shadow`}
                     style={{ borderColor: colors.border }}>
                  <div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6`}
                    style={{ backgroundColor: colors.bg }}
                  >
                    <Icon className={`w-8 h-8`} style={{ color: colors.icon }} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}