import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';

export function ScreenshotsSection() {
  // App screenshots with actual images
  const screenshots = [
    {
      // Login 
      title: "Login View",
      description: "Login to the app with your email and password",
      image: image1
    },
    {
      title: "Vendor List",
      description: "Browse detailed profiles of local food vendors and trucks",
      image: image2
    },
    {
      title: "Add New Vendor",
      description: "Add a new vendor to the app",
      image: image3
    },
    {
      title: "My Profile",
      description: "View your profile and settings",
      image: image4
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
                    <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover" />


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