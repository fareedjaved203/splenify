import Companies from "@/components/companies/Companies";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Process from "@/components/process/Process";
import Specialize from "@/components/specialize/Specialize";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Companies />
      <Process />
      <Specialize />
    </main>
  );
}
