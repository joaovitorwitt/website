import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
