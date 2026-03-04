import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import SummerCamp from '@/components/SummerCamp';
import Testimonials from '@/components/Testimonials';
import AdmissionForm from '@/components/AdmissionForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <SummerCamp />
      <Testimonials />
      <AdmissionForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
