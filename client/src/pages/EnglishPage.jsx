import React from 'react'
import { Container } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

export const EnglishPage = () => {
    const {articles} = useArticle()
  return (
    (articles.recentArticles && (
            <Container className='mt-4'>
                <LatestSection />
                <SponsoredSection />
            </Container>
    ))
  )
}
