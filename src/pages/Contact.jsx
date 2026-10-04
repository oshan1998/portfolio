import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from '../components/SectionHeader'

const contactMethods = [
  {
    label: 'Email',
    value: 'oshanrajapaksha98@gmail.com',
    href: 'mailto:oshanrajapaksha98@gmail.com',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: 'Phone',
    value: '+94 76 343 7235',
    href: 'tel:+94763437235',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/oshan1998',
    href: 'https://github.com/oshan1998',
    external: true,
    icon: (
      <path fill="currentColor" stroke="none" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.665-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/oshan-chamara',
    href: 'https://linkedin.com/in/oshan-chamara',
    external: true,
    icon: (
      <path fill="currentColor" stroke="none" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        'service_1gfpicl',
        'template_re4rhp6',
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'lncVLyfNducObIUkH'
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly at oshanrajapaksha98@gmail.com')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Let's connect and discuss your next project"
        />

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-xl shadow-sm hover:shadow-md p-5 border border-gray-200 dark:border-white/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-11 h-11 shrink-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {method.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{method.label}</h3>
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm truncate block group-hover:underline">
                    {method.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            {submitted && (
              <div className="bg-green-100 dark:bg-green-900/40 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-4">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="bg-red-100 dark:bg-red-900/40 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-white/5 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-white/5 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-white/5 text-gray-900 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
