import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useArticle } from '../context/articlesContext'
import ArticleList from './ArticleList';
import FeaturedArticle from './FeaturedArticle';

const LatestSection = () => {
  // retrieve articles state from context
  const {articles} = useArticle()
  // assign the most recent articles to a constant
  const latestArticles = articles.recentArticles;
  // cut out three articles for the right column articleList
  const articleList = latestArticles.slice(1, 4);

  return (
      <section>
          <h5 className='section-title'>Latest</h5>
          <Row>
              <Col xs={12} md={6}>
                {/* Featured Article (the first one in the array) */}
                <FeaturedArticle article={latestArticles[0]} />
              </Col>
              <Col xs={12} md={6}>
                   {/* Article list section */}
                  <ArticleList articles={articleList} />
              </Col>
          </Row>
      </section>
  )
}

export default LatestSection