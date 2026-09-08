import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Approach } from '@/components/sections/Approach';
import { ProcessSplit } from '@/components/sections/ProcessSplit';
import { Projects } from '@/components/sections/Projects';
import { Compliance } from '@/components/sections/Compliance';
import { Clients } from '@/components/sections/Clients';
import { CtaFinal } from '@/components/sections/CtaFinal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <ProcessSplit />
        <Projects />
        <Compliance />
        <Clients />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
