import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseMe from '@/components/WhyChooseMe';
import WorkingExperience from '@/components/WorkingExperience';
import Numbers from '@/components/Numbers';
import WorkingProcess from '@/components/WorkingProcess';
import ClientReviews from '@/components/ClientReviews';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <WorkingExperience />
      <Numbers />
      <WorkingProcess />
      <ClientReviews />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
