import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InvestorsOfferSection from "@/components/InvestorsOfferSection";
import StartupsOfferSection from "@/components/StartupsOfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background font-semibold">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <BenefitsSection />
        <HowItWorksSection />
        <InvestorsOfferSection />
        <StartupsOfferSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
