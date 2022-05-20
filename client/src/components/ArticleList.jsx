import ArticleCard from './ArticleCard'

const ArticleList = ({ articles }) => {
  return (
    <div>
      {/* generate article cards based on the number of articles passed in */}
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  )
}

export default ArticleList