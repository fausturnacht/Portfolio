import { Footer, Header } from "@/components/chrome";
import { Hero } from "@/components/hero";
import { About, Contact, Experience } from "@/components/sections";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
