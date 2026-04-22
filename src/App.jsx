import PromoBar from "./components/PromoBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BannerCTA from "./components/BannerCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <About />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <BannerCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
