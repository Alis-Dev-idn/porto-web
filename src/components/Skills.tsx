import { skills } from '../data/profile'

// Skills per kategori dengan badge/tag, tanpa progress-bar (PRD §8.3).
export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-[clamp(64px,10vw,120px)]">
      <div className="mb-10 flex items-baseline gap-3.5">
        <span className="section-num">02</span>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold">
          Skills &amp; Tech Stack
        </h2>
      </div>

      <div className="grid gap-4.5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-[14px] border border-line bg-card p-6 shadow-sm"
          >
            <h3 className="mb-3.5 text-[15px] font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag tag-mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
