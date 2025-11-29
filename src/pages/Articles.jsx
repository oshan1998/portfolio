import SectionHeader from '../components/SectionHeader'
import { articles } from '../data/articles'

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6 animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{article.title}</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
          Coming Soon
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {article.description}
      </p>
    </div>
  )
}

const Articles = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          title="Articles & Blog"
          subtitle="Technical articles and insights (coming soon)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Articles

