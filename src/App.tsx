import { useCallback, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Portfolio } from './components/Portfolio'
import { ProjectModal } from './components/ProjectModal'
import { Contact } from './components/Contact'
import { projects } from './data/projects'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const openProject = useCallback((slug: string) => setActiveSlug(slug), [])
  const closeProject = useCallback(() => setActiveSlug(null), [])

  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main className="mx-auto max-w-[1080px] px-[clamp(20px,5vw,48px)]">
        <Hero />
        <About />
        <Skills />
        <Experience onOpenProject={openProject} />
        <Portfolio onOpenProject={openProject} />
        <Contact />
      </main>
      <ProjectModal project={activeProject} onClose={closeProject} />
    </>
  )
}

export default App
