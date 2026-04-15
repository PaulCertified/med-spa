import { About } from "@/components/site/about";
import { AIAssistantDock } from "@/components/site/ai-assistant-dock";
import { Brands } from "@/components/site/brands";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Specials } from "@/components/site/specials";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <Header />
        <Hero />
        <About />
        <Services />
        <Specials />
        <Brands />
        <Testimonials />
      </main>
      <Footer />
      <AIAssistantDock />
    </div>
  );
}
