import { Container, Spinner } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

const CantonesePage = () => {
  // retrieve articles state from context
  const { articles } = useArticle()
  return (
    // only render the page when articles are fetched
    (articles.recentArticles ? (
      <Container className='mt-4'>
        {/* Latest Article Section */}
        <LatestSection />
        {/* Sponsored Articles Section */}
        <SponsoredSection />
      </Container>
    ) : (
      // show spinner and loading message while waiting fro the articles from server
      <h1 className='text-center mt-4'>
        <Spinner className='me-3' animation="grow" variant="secondary" />
        Loading...
      </h1>
    ))
  )
}

export default CantonesePage