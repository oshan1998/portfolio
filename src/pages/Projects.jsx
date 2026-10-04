import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const categoryColors = {
  'Agentic AI': 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300',
  'Full-Stack': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
  'Machine Learning': 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  'Hardware Design': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
}

const demoPlatformMeta = {
  youtube: {
    label: 'Watch Demo',
    className: 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 border-red-200 dark:border-red-500/20',
    icon: (
      <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.12C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.521A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.107 2.12c1.886.521 9.391.521 9.391.521s7.505 0 9.391-.521a2.994 2.994 0 002.107-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
    ),
  },
  linkedin: {
    label: 'Watch Demo',
    className: 'text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
}

const ProjectCard = ({ project }) => {
  const badgeClass = categoryColors[project.category] || 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300'

  return (
    <div
      className={`relative bg-white dark:bg-white/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border overflow-hidden animate-slide-up ${
        project.featured
          ? 'border-indigo-200 dark:border-indigo-500/30 ring-1 ring-indigo-100 dark:ring-indigo-500/10'
          : 'border-gray-200 dark:border-white/10'
      }`}
    >
      {project.featured && (
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            {project.date && (
              <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-2">{project.date}</p>
            )}
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${badgeClass}`}>
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded border border-transparent dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.demoUrl && (() => {
          const demo = demoPlatformMeta[project.demoPlatform] || demoPlatformMeta.youtube
          return (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${demo.className}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                {demo.icon}
              </svg>
              {demo.label}
            </a>
          )
        })()}
      </div>
    </div>
  )
}

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="My Projects"
          subtitle="A collection of projects showcasing my skills and interests"
        />

        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {other.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Projects
