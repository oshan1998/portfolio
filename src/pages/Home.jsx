import { Link } from 'react-router-dom'

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '6+', label: 'Production Services Shipped' },
  { value: '1', label: 'Live App Owned End-to-End' },
]

const focusAreas = [
  {
    title: 'Full-Stack Engineering',
    description: 'Building reliable backend systems and modern web apps end-to-end with NestJS, React, Angular, and Node.js.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L4 12l5.75-5M14.25 7L20 12l-5.75 5" />
    ),
  },
  {
    title: 'Cloud & Data Infrastructure',
    description: 'Designing BigQuery sync pipelines, hash-based CDC, and queue/scheduler control planes on AWS and GCP.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 004 4h10a4 4 0 001-7.87 5.5 5.5 0 00-10.5-2A4.5 4.5 0 003 15z" />
    ),
  },
  {
    title: 'Agentic AI & LLM Systems',
    description: 'Designing multi-agent workflow runtimes and hierarchical agent orchestrators with Vertex AI, OpenAI, and MCP.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
  },
]

const Home = () => {
  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-float-slow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-40 -left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float"
          aria-hidden="true"
        />

        <div className="relative text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-gray-600 dark:text-gray-300">Open to new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Oshan Chamara</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
            Software Engineer — Full-Stack &amp; Agentic AI
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build backend systems, full-stack applications, and AI-powered solutions — owning projects end-to-end,
            from requirements and architecture through development, deployment, and production support. 2+ years
            shipping with TypeScript, Python, NestJS, React, and LLM integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-ink-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-extrabold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group p-6 bg-white dark:bg-white/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {area.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
