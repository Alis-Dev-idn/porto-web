import { skills } from '../../data/profile'
import { SectionHeader } from '../atoms/SectionHeader'
import { SkillGroupCard } from '../molecules/SkillGroupCard'

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-[clamp(64px,10vw,120px)]">
      <SectionHeader number="02" title={<>Skills &amp; Tech Stack</>} />

      <div className="grid gap-4.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {skills.map((group) => (
          <SkillGroupCard
            key={group.category}
            category={group.category}
            items={group.items}
          />
        ))}
      </div>
    </section>
  )
}
