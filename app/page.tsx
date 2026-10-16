import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
