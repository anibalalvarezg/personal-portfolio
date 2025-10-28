import { personalData, professionalExperience, educationData, interestAreas } from '@/lib/data';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="container relative mx-auto max-w-4xl p-8 md:p-12">
      <Hero data={personalData} />
      
      <About summary={personalData.summary} />
      
      <Experience experiences={professionalExperience} />
      
      <Education data={educationData} />
      
      <Interests areas={interestAreas} />
      
      <Footer />
    </main>
  );
}