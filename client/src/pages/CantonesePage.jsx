import { Container } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

const CantonesePage = () => {
  // retrieve articles state from context
  const { articles } = useArticle()
  return (
    // only render the page when articles are fetched
    (articles.recentArticles && (
      <Container className='mt-4'>
        {/* Latest Article Section */}
        <LatestSection />
        {/* Sponsored Articles Section */}
        <SponsoredSection />
      </Container>
    ))
  )
}

export default CantonesePage