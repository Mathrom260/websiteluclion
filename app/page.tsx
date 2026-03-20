import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { WhyUs } from '@/components/WhyUs';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />
      <Hero />
      <TrustBar />
      <WhyUs />
      <CTAFinal />
      <Footer />
    </main>
  );
}
