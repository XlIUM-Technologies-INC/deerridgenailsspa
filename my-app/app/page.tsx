import HeroSection from "@/components/parts/hero-sections";
import ServicesSection from "@/components/parts/services-section";
import WhyChooseUs from "@/components/parts/why-us";
import VibeSection from "@/components/parts/vibe-section";
import QualitySection from "@/components/parts/quality-section";

export default function page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <VibeSection />
      <QualitySection />
      <WhyChooseUs />
    </main>
  );
}
