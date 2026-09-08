import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Approach } from '@/components/sections/Approach';
import { ProcessSplit } from '@/components/sections/ProcessSplit';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <ProcessSplit />
        <Projects />
      </main>
    </>
  );
}
