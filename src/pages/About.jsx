import SectionHeader from '../components/SectionHeader'

const experience = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'ZOOMi Technologies Inc.',
    location: 'Boralasgamuwa, Sri Lanka',
    period: 'Jul 2024 - Present',
    points: [
      'Took full ownership of a live legacy application, independently maintaining and evolving the system through delivering new features, optimizing data-intensive workflows, resolving production issues, and managing production deployments.',
      'Owned end-to-end customer delivery, from requirements analysis and Jira planning through development, testing, deployment, and production support, consistently meeting agreed timelines.',
      'Architected and delivered a NestJS/React platform for a 3D printing company, streamlining its production pipeline through technician task assignment, job tracking, and status monitoring within three months.',
      'Designed and built a multi-source transaction synchronization service maintaining transaction history and running balances in BigQuery for automated QuickBooks reconciliation by AI agents.',
      'Designed and implemented a source-agnostic master data synchronization service with hash-based CDC, keeping BigQuery datasets current for downstream AI agents.',
      'Designed and built a queue and scheduler-based control plane for custom QuickBooks ETL pipelines, completely replacing Fivetran for BigQuery synchronization.',
    ],
    tech: ['NestJS', 'React', 'Angular', 'MongoDB', 'Python', 'FastAPI', 'BigQuery', 'AWS', 'GCP', 'OpenAI', 'Docker'],
  },
  {
    role: 'Trainee Electronic Engineer',
    company: 'Vega Innovations (Pvt) Ltd',
    location: 'Colombo, Sri Lanka',
    period: 'Jan 2023 - Jun 2023',
    points: [
      'Designed an EEPROM library with wear leveling, used in production firmware of the Vega ETX electric three-wheeler.',
      'Extended and maintained the display firmware for Vega ETX and the Vega conversion kit.',
      'Modified the SPC5 custom bootloader of the Vehicle Control Unit, designing an algorithm to handle errors during OTA firmware updates.',
      'Designed the PCB and firmware for a rotary gear knob with an LCD display for an upcoming electric mini car; ported an Arduino IMU sensor library to STM32 and SPC5.',
    ],
    tech: ['C', 'C++', 'STM32', 'SPC5', 'CAN', 'SPI', 'QSPI', 'UART', 'Eagle PCB'],
  },
]

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="About Me"
          title="Engineer. Problem solver. Builder."
          subtitle="Owning software end-to-end, from architecture to production support"
        />

        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
          {/* Profile */}
          <div className="space-y-5">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Software Engineer with 2+ years of experience building backend systems, full-stack applications,
              and AI-powered solutions. I'm experienced in owning software projects end-to-end — from requirements
              and architecture through development, testing, deployment, and production support.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My day-to-day work spans TypeScript, Python, Node.js, React, and NestJS, backed by cloud infrastructure
              on AWS and GCP. Over the past year, I've leaned deeper into AI/LLM integrations — designing
              multi-agent workflow runtimes, BigQuery sync pipelines, and automation that keeps AI agents working
              with reliable, up-to-date data.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Before software, I trained as an Electronic and Telecommunication Engineer and worked on embedded
              firmware for electric vehicles — a background that still shapes how I think about reliability,
              constraints, and building systems that have to work in production.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>

            <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    B.Sc. Engineering (Hons.), Electronic and Telecommunication Engineering
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">University of Moratuwa</p>
                </div>
                <span className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan 2020 - Jun 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                <li>Semester 1, 6, 8 Dean's list</li>
                <li>GPA: 3.41</li>
                <li>Second Class Upper Division</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>

            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-white/10">
              {experience.map((job) => (
                <div key={job.role + job.company} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 ring-4 ring-white dark:ring-ink flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>

                  <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {job.company}, {job.location}
                        </p>
                      </div>
                      <span className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{job.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {job.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded border border-transparent dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
