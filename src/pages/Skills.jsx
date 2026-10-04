import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

const categories = [
  {
    key: 'development',
    title: 'Development',
    description: 'Languages and frameworks I build with day to day.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
  },
  {
    key: 'infrastructure',
    title: 'Infrastructure & Cloud',
    description: 'Where the systems I build actually run.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.25 6.375c0 2.07-3.694 3.75-8.25 3.75s-8.25-1.68-8.25-3.75S7.444 2.625 12 2.625s8.25 1.68 8.25 3.75zM3.75 6.375v11.25c0 2.07 3.694 3.75 8.25 3.75s8.25-1.68 8.25-3.75V6.375" />
    ),
  },
  {
    key: 'ai',
    title: 'AI & Agentic Systems',
    description: 'LLM integrations and multi-agent workflows.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
  },
  {
    key: 'engineering',
    title: 'Engineering Practice',
    description: 'How I design and integrate systems.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    ),
  },
]

const Skills = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Skills"
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <div
              key={category.key}
              className="bg-white dark:bg-white/5 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-white/10 animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.08}s` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {category.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
