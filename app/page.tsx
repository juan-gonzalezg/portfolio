import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}