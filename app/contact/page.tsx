import { NavBar } from '@/components/NavBar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />
      <Contact />
      <Footer />
    </main>
  );
}
