import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useArticle } from '../context/articlesContext'
import ArticleList from './ArticleList';
import FeaturedArticle from './FeaturedArticle';

const LatestSection = () => {
  const {articles} = useArticle()
  const latestArticles = articles.recentArticles;
  
  const articleList = latestArticles.slice(1, 4);
  return (
      <section>
          <h5 className='section-title'>Latest</h5>
          <Row>
              <Col xs={12} md={6}>
                <FeaturedArticle article={latestArticles[0]} />
              </Col>
              <Col xs={12} md={6}>
                  <ArticleList articles={articleList} />
              </Col>
          </Row>
      </section>
  )
}

export default LatestSection