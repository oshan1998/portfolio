import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

const SkillCard = ({ category, items }) => {
  const getLevelColor = (level) => {
    if (level === 'Advanced') return 'bg-blue-600'
    if (level === 'Intermediate') return 'bg-purple-600'
    return 'bg-gray-600'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((skill, index) => (
          <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)}`}
                style={{
                  width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-8">
          <SkillCard category="💻 Software Development" items={skills.software} />
          <SkillCard category="🔌 Electronics & Embedded" items={skills.embedded} />
          <SkillCard category="⚙️ Other" items={skills.other} />
        </div>
      </section>
    </div>
  )
}

export default Skills

