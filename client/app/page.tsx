import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Features from "@/components/Features";
import AiMentor from "@/components/AiMentor";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Journey />
      <Features />
      <AiMentor />
      <Community />
      <Footer />
    </main>
  );
}