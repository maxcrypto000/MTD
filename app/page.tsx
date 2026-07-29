import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Empathy from "@/components/Empathy";
import Method from "@/components/Method";
import Stats from "@/components/Stats";
import Pillars from "@/components/Pillars";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Empathy />
        <Method />
        <Stats />
        <Pillars />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
