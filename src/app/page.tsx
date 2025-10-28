"use client"

import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { Footer } from '@/components/footer';
import { SkipToContent } from '@/components/skip-to-content';
import { useLocalizedData } from '@/lib/use-localized-data';

export default function Home() {
  const { personalData, professionalExperience, educationData, interestAreas } = useLocalizedData()
  
  return (
    <>
      <SkipToContent />
      
      <div className="fixed inset-0 -z-10 bg-background" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <main id="main-content" className="container relative mx-auto max-w-4xl p-8 md:p-12">
        <Hero data={personalData} />
        
        <About />
        
        <Experience experiences={professionalExperience} />
        
        <Education data={educationData} />
        
        <Interests areas={interestAreas} />
        
        <Footer />
      </main>
    </>
  );
}