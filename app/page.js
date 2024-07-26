import Companies from "@/components/companies/Companies";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Process from "@/components/process/Process";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Specialize from "@/components/specialize/Specialize";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Companies />
      <Process />
      <Specialize />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}
