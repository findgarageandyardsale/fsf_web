import { Button } from "../../shared/ui/button";
import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";
import { DollarSign, Users, MapPin, TrendingUp } from "lucide-react";

export function ForVendorsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Free Listing",
      description: "List your food truck or street food spot at no cost and start reaching more customers today"
    },
    {
      icon: MapPin,
      title: "Update Location",
      description: "Keep customers informed of your current location and operating hours in real-time"
    },
    {
      icon: Users,
      title: "Reach Customers",
      description: "Connect with hungry customers who are actively looking for great street food"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Build a loyal customer base and increase your daily sales through our platform"
    }
  ];

  return (
    <section id="vendors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1751178181702-9e95b304057f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdHJ1Y2slMjB2ZW5kb3J8ZW58MXx8fHwxNzU1ODM5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Food truck vendor"
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* Floating notification */}
            <div
              className="absolute -top-4 -right-4 text-white rounded-lg shadow-lg p-3 animate-pulse"
              style={{ backgroundColor: '#2e8943' }}
            >
              <p className="text-sm font-semibold">+25 new customers today! 📈</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              For Vendors & Food Trucks
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Turn your passion for cooking into a thriving business. Connect with more customers,
              manage your presence, and grow your street food empire.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(30, 90, 45, 0.3)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#1e5a2d' }} />
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

            <Button
              size="lg"
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#2e8943' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e5a2d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2e8943'}
            >
              List Your Street Food Spot Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}