import { Star, Bookmark, Share2 } from "lucide-react";
import truck from '../../../assets/images/truck2.jpg';


export function ForFoodLoversSection() {
  const benefits = [
    {
      icon: Star,
      title: "Discover New Flavors",
      description: "Explore authentic street food from different cultures and cuisines in your neighborhood"
    },
    {
      icon: Bookmark,
      title: "Save Your Favorites",
      description: "Bookmark your favorite vendors and get notified when they're nearby or have special offers"
    },
    {
      icon: Share2,
      title: "Share Your Finds",
      description: "Help others discover amazing food by sharing reviews, photos, and recommendations"
    }
  ];

  return (
    <section
      id="features"
      className="py-16"
      style={{ background: 'linear-gradient(to bottom right, #f0f9f2, #dcf3e1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              For Food Lovers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform the way you discover and enjoy street food. From hidden gems to popular spots,
              find exactly what you're craving when you're craving it.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(46, 137, 67, 0.3)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#2e8943' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src={truck}
              alt="Find Street Food Hero"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
            />

            {/* Floating rating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex" style={{ color: '#2e8943' }}>
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9</span>
              </div>
              <p className="text-sm text-gray-600">Fresh & healthy! 🥗</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}