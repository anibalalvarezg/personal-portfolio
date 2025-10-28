import { personalData, professionalExperience, educationData, interestAreas } from '@/lib/data';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      
      <div className="fixed inset-0 -z-10 bg-background" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <main id="main-content" className="container relative mx-auto max-w-4xl p-8 md:p-12">
        <Hero data={personalData} />
        
        <About summary={personalData.summary} />
        
        <Experience experiences={professionalExperience} />
        
        <Education data={educationData} />
        
        <Interests areas={interestAreas} />
        
        <Footer />
      </main>
    </>
  );
}