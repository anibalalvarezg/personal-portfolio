import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Publications } from "@/components/sections/publications"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { ClientShell } from "@/components/client-shell"
import { SkipToContent } from "@/components/skip-to-content"

export default function Home() {
  return (
    <>
      <SkipToContent />
      <ClientShell>
        <main id="main-content">
          <Hero />
          <Projects />
          <Publications />
          <Skills />
          <Experience />
          <About />
          <Contact />
          <Footer />
        </main>
      </ClientShell>
    </>
  )
}
