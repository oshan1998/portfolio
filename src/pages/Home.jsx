import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Oshan Chamara</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
            Full-Stack & Embedded Systems Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build fast, scalable full-stack applications using Node.js, NestJS, React, and TypeScript. 
            I also work with electronics, Raspberry Pi, sensors, and drone systems. 
            I love learning advanced OS concepts, C/C++, blockchain basics, and building real engineering projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Full-Stack</div>
              <div className="text-gray-600 dark:text-gray-400">Expertise</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Embedded</div>
              <div className="text-gray-600 dark:text-gray-400">Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Full-Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building scalable web applications with modern frameworks and best practices.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">🔌</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Embedded Systems</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Working with microcontrollers, sensors, and real-time control systems.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designing robust architectures and exploring low-level system concepts.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

