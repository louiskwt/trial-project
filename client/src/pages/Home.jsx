import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // set up useNavigate hook for redirection
    let navigate = useNavigate();
    // make use of useEffect hook to redirect during the rendering
    useEffect(() => {
        // redirect to recent-articles
        navigate('/recent-articles');
    }, [])

  return (
    <Container>
        <div className='text-center'>
            <h1>Home Page</h1>
        </div>
    </Container>
  )
}

export default Home