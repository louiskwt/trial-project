import { Container } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

export const EnglishPage = () => {
    // retrieve articles state from context
    const {articles} = useArticle()
  return (
    // only render the page when the articles are fetched
    (articles.recentArticles && (
            <Container className='mt-4'>
                <LatestSection />
                <SponsoredSection />
            </Container>
    ))
  )
}
