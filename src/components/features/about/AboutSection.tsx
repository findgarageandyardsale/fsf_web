import { MapPin, UtensilsCrossed, Clock, Heart } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Location-based search",
      description: "Find street food vendors and food trucks near your current location instantly"
    },
    {
      icon: UtensilsCrossed,
      title: "Menus at a glance",
      description: "Browse complete menus with photos, prices, and descriptions before you visit"
    },
    {
      icon: Clock,
      title: "Live availability",
      description: "Real-time updates on operating hours, availability, and current location"
    },
    {
      icon: Heart,
      title: "Support locals",
      description: "Help local food entrepreneurs grow their business and community"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Gateway to Street Food Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find Street Food connects food lovers with authentic street vendors, food trucks, and local eateries. 
            Discover hidden gems, track your favorites, and support the vibrant street food community in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:bg-opacity-50 transition-colors"
                  style={{ backgroundColor: 'rgba(74, 157, 94, 0.3)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(74, 157, 94, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(74, 157, 94, 0.3)'}
                >
                  <Icon className="w-8 h-8" style={{ color: '#2e8943' }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}