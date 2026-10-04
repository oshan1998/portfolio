import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const categoryColors = {
  'Agentic AI': 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300',
  'Full-Stack': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
  'Machine Learning': 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  'Hardware Design': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
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

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded border border-transparent dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
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
