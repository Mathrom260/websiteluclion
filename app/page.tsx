import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Expertise } from '@/components/Expertise';
import { WhyUs } from '@/components/WhyUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />
      <Hero />
      <TrustBar />
      <Expertise />
      <WhyUs />
    </main>
  );
}
