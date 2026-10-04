const SectionHeader = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'left' ? 'text-left items-start mx-0' : 'text-center items-center mx-auto'

  return (
    <div className={`flex flex-col mb-12 animate-fade-in max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="font-mono-label mb-3">{eyebrow}</span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
