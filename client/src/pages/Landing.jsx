import Navbar from "../components/landing/navbar/Navbar";
import Hero from "../components/landing/Hero/Hero";
import Features from "../components/landing/Features/Features";
import CareerSection from "../components/landing/CareerSection/CareerSection";
import DashboardShowcase from "../components/landing/DashboardShowcase/DashboardShowcase";
import CTA from "../components/landing/CTA/CTA";
import Footer from "../components/landing/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CareerSection />
      <DashboardShowcase />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;