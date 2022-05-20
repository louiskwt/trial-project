import { Container, Spinner } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

export const EnglishPage = () => {
    // retrieve articles state from context
    const {articles} = useArticle()
  return (
    // only render the page when the articles are fetched
    (articles.recentArticles ? (
            <Container className='mt-4'>
                <LatestSection />
                <SponsoredSection />
            </Container>
    ) : (
      // show spinner and loading message while waiting fro the articles from server
      <h1 className='text-center mt-4'>
        <Spinner className="me-3" animation="grow" variant="secondary" />
        Loading...
      </h1>
    ))
  )
}
