import { Container } from 'react-bootstrap'
import LatestSection from '../components/LatestSection'
import SponsoredSection from '../components/SponsoredSection'
import { useArticle } from '../context/articlesContext'

const CantonesePage = () => {
  const { articles } = useArticle()
  return (
    (articles.recentArticles && (
      <Container className='mt-4'>
        <LatestSection />
        <SponsoredSection />
      </Container>
    ))
  )
}

export default CantonesePage