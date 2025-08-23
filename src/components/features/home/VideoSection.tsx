import { Play } from "lucide-react";

export function VideoSection() {
  // Replace this with your actual Vimeo video ID
  const vimeoVideoId = "916055987"; // Placeholder - replace with your actual video ID
  
  return (
    <section 
      id="video" 
      className="py-16"
      style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0f9f2)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(74, 157, 94, 0.3)' }}
          >
            <Play className="w-8 h-8" style={{ color: '#2e8943' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Find Street Food in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our app connects food lovers with amazing street vendors and transforms 
            the way you discover local cuisine.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoVideoId}?h=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Find Street Food - App Demo"
              className="w-full h-full"
            />
          </div>
          
          {/* Decorative elements */}
          <div 
            className="absolute -top-4 -left-4 w-8 h-8 rounded-full opacity-70 animate-pulse"
            style={{ backgroundColor: '#4a9d5e' }}
          ></div>
          <div 
            className="absolute -top-2 -right-6 w-6 h-6 rounded-full opacity-60 animate-bounce delay-300"
            style={{ backgroundColor: '#8dd5a3' }}
          ></div>
          <div 
            className="absolute -bottom-6 -left-2 w-10 h-10 rounded-full opacity-50 animate-pulse delay-500"
            style={{ backgroundColor: '#2e8943' }}
          ></div>
          <div 
            className="absolute -bottom-4 -right-4 w-7 h-7 rounded-full opacity-80 animate-bounce delay-700"
            style={{ backgroundColor: '#1e5a2d' }}
          ></div>
        </div>

        {/* Stats below video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#2e8943' }}>10K+</div>
            <p className="text-gray-600">Happy Food Lovers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#1e5a2d' }}>500+</div>
            <p className="text-gray-600">Registered Vendors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#1f5a2d' }}>25+</div>
            <p className="text-gray-600">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
}