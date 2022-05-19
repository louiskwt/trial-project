import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useArticle } from '../context/articlesContext'
import ArticleList from './ArticleList';

const SponsoredSection = () => {
  const { articles } = useArticle();
  const leftArticles = articles.sponsoredArticles.slice(0, 3);
  const rightArticles = articles.sponsoredArticles.slice(3, 6);
  return (
    <section className='mt-4 mb-4'>
      <h5 className='section-title'>Sponsored</h5>
      <Row>
        <Col xs={12} md={6}>
          <ArticleList articles={leftArticles} />
        </Col>
        <Col xs={12} md={6}>
          <ArticleList articles={rightArticles} />
        </Col>
      </Row>
    </section>
  )
}

export default SponsoredSection