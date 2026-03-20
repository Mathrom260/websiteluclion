import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ClientsTicker } from '@/components/ClientsTicker';
import { Stats } from '@/components/Stats';
import { WhyUs } from '@/components/WhyUs';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-[#eef2f8]">
      <NavBar />
      <Hero />
      <TrustBar />
      <Stats />
      <WhyUs />
      <ClientsTicker />
      <CTAFinal />
      <Footer />
    </main>
  );
}
