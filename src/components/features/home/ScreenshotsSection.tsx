import { ImageWithFallback } from "../../shared/ui/ImageWithFallback";

export function ScreenshotsSection() {
  // Mock app screenshots - in real app, these would be actual app screenshots
  const screenshots = [
    {
      title: "Map View",
      description: "Find street food vendors near you with our interactive map"
    },
    {
      title: "Vendor Listings",
      description: "Browse detailed profiles of local food vendors and trucks"
    },
    {
      title: "Menu Browser",
      description: "View complete menus with photos and pricing"
    },
    {
      title: "Reviews & Ratings",
      description: "Read reviews and share your food experiences"
    }
  ];

  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(to bottom right, #f0f9f2, #dcf3e1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the App in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the intuitive interface designed to make finding and enjoying street food effortless and fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Mock phone frame */}
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623002071634-54590669fe3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNtb290aGllJTIwaGVhbHRoeSUyMGRyaW5rfGVufDF8fHx8MTc1NTkzMjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay to make it look more like app UI */}
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{ background: 'linear-gradient(to top, rgba(34, 197, 94, 0.2), transparent)' }}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {screenshot.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}