import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;