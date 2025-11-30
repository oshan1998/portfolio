import SectionHeader from '../components/SectionHeader'

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="About Me"
          subtitle="Passionate engineer building the future, one line of code at a time"
        />

        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Profile */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A highly motivated and fast-learning Software Engineer with a proven ability to deliver impactful solutions 
              with minimal guidance. Quickly adapts to new technologies and domains, taking ownership of critical 
              projects and driving meaningful improvements.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With 2+ year of experience as a Full-Stack Developer, I have independently handled end-to-end project 
              development, including architecture design, server setup, deployments, and occasional client communication, 
              consistently delivering projects on time. I also have foundational knowledge in machine learning, having 
              completed my final-year project in this field, and gained industrial experience working with Large Language 
              Models (LLMs).
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong problem-solving mindset and a focus on achieving project objectives, I am eager to 
              contribute my skills to challenging and innovative projects.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    B.Sc. Engineering (Hons.), Electronic and Telecommunication Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">University of Moratuwa</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">Jan 2020 - June 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                <li>Semester 1, 6, 8 Dean's list</li>
                <li>GPA: 3.41</li>
                <li>Second Class Upper Division</li>
              </ul>
            </div>

            {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    G.C.E Advanced Level Examination
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">H/Weeraketiya Central College</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">Feb 2015 – Aug 2018</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                <li>Combined Mathematics - A | Physics - A | Chemistry - A</li>
                <li>Z-Score: 1.9517</li>
              </ul>
            </div> */}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Full-Stack Software Engineer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Zoomi Technologies, Piliyandala, Sri Lanka</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">Jul 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Architected and developed a full-stack backend system with NestJS and MongoDB, from design to deployment, ensuring scalability and reliability. Enhanced and maintained existing LoopBack3 and Python Flask projects, including LLM integrations with OpenAI API.</li>
                <li>Delivered end-to-end frontend solutions, building complete React.js applications independently and extending Angular-based products with new features, performance improvements, and bug fixes.</li>
                <li>Implemented robust DevOps practices, provisioning and managing servers on AWS and GCP, configuring Nginx, PM2, SSL, and S3 storage.</li>
                <li>Served as the sole developer in critical projects, collaborating closely with project managers on system architecture while directly engaging with clients.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {['NestJS', 'LoopBack3', 'Python Flask', 'Node.js', 'TypeScript', 'React.js', 'Angular', 'MongoDB', 'AWS', 'GCP'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Trainee Electronic Engineer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Vega Innovations Pvt Ltd, Colombo 10, Sri Lanka</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">Jan 2023 - Jun 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Designed an EEPROM library with wear leveling for production electric three-wheeler (Vega ETX).</li>
                <li>Worked with display firmware team, contributing to Vega ETX and conversion kit firmware with modifications and bug fixes.</li>
                <li>Designed PCB and firmware for a gear knob with LCD display for upcoming electric mini car.</li>
                <li>Modified custom boot-loader code for SPC5 microcontroller to handle OTA firmware update errors in Vehicle Control Unit.</li>
                <li>Converted Arduino IMU sensor library for STM32 and SPC5 microcontrollers.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {['C', 'C++', 'STM32', 'SPC5', 'SPI', 'CAN', 'UART', 'QSPI', 'Eagle PCB'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
