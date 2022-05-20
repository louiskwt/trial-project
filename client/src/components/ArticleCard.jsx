const ArticleCard = ({ article }) => {
  return (
     <div className="card flex-row mb-2">
         <div className="border-0">
               {/* Card image */}
              <img src={article.attributes.image.data.attributes.url} style={{ width: '12rem', height: '100%' }} alt="" />
         </div>
         {/* Card title and exerpt */}
         <div className="card-block px-3">
             <h5>{article.attributes.title}</h5>
             <p>{article.attributes.exerpt}</p>
         </div>
     </div>
  )
}

export default ArticleCard