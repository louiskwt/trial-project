import { Card } from 'react-bootstrap'

const FeaturedArticle = ({article}) => {
  return (
    <Card className='mb-4'>
        {/* Card Image */}
        <Card.Img variant="top" src={article.attributes.image.data.attributes.url} />   
        {/* Card Content */}
        <Card.Body>
            <Card.Title>{article.attributes.title}</Card.Title>
            <Card.Text>{article.attributes.exerpt}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default FeaturedArticle