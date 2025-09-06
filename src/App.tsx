import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Header,
  Footer,
  HeroSection,
  VideoSection,
  AboutSection,
  ForFoodLoversSection,
  ForVendorsSection,
  HowItWorksSection,
  ScreenshotsSection,
  CTASection,
  PrivacyPolicy
} from "./components";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <ForFoodLoversSection />
        <ForVendorsSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}