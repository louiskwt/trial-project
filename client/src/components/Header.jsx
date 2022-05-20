import { Navbar, Nav, Container } from 'react-bootstrap'
import { useArticle } from '../context/articlesContext'
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Pull out change language function from context
  const { changeLang, articles } = useArticle();
  const language = articles.lang;
  // use useNavigate hook to navigate between English and Cantonese pages
  let navigate = useNavigate();
  // handle header navigation click
  const handleNavigate = (lang) => {
    changeLang(lang);
    if(lang === 'zh') {
      navigate('/zh/recent-articles');
    } else {
      navigate('/recent-articles');
    }
  }
  
  return (
    // a simple Navbar as a Header
    <Navbar collapseOnSelect expand="md" bg='dark' variant="dark">
        <Container>
            {/* Title of the project */}
            <Navbar.Brand>Trial Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                <Nav >
                    {/* Nav link for changing languages */}
                    <Nav.Link onClick={() => handleNavigate('en')} className={(language === 'en' ? 'text-primary active' : '')} >English</Nav.Link>
                    <Nav.Link className={(language === 'zh' ? 'text-primary active' : '')} onClick={() =>  handleNavigate('zh')}>
                          Cantonese
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header