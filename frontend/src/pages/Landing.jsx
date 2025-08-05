import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/landing/Footer";
import CTA from "../components/landing/CTA";
import PricingSection from "../components/landing/PricingSection";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PricingSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
