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
  CTASection
} from "./components";

export default function App() {
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