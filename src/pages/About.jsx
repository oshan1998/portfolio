import SectionHeader from '../components/SectionHeader'

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="About Me"
          subtitle="Passionate engineer building the future, one line of code at a time"
        />

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Full-Stack & Embedded Systems Engineer with a passion for building robust, 
              scalable applications and exploring the intersection of software and hardware.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in software development started with a curiosity about how things work 
              under the hood. This led me to explore everything from high-level web frameworks 
              to low-level system programming, from distributed systems to embedded electronics.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              What I'm Passionate About
            </h3>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Building fast, scalable full-stack applications with modern technologies</li>
              <li>Working with embedded systems, sensors, and IoT devices</li>
              <li>Exploring advanced operating system concepts and system design</li>
              <li>Learning about blockchain technology and distributed systems</li>
              <li>Building real-world engineering projects that solve actual problems</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              My Approach
            </h3>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. 
              Whether I'm building a REST API with NestJS, creating a React dashboard, or 
              programming a Raspberry Pi flight controller, I focus on understanding the 
              fundamentals and applying them effectively.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm always learning and exploring new technologies. From diving deep into 
              TypeScript's type system to understanding how PID control algorithms work, 
              I enjoy the challenge of mastering complex concepts and applying them to 
              real-world projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

