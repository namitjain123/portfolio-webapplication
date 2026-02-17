import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CustomCursor />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
