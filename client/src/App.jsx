import { ArticlesContextProvider } from './context/articlesContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import CantonesePage from './pages/CantonesePage';
import { EnglishPage } from './pages/EnglishPage';
import './App.css'

function App() {

  return (
    <ArticlesContextProvider>
      <div className="App">
        <BrowserRouter>
          {/* Navbar */}
          <Header />
          <Routes>
            {/* Routes for the app */}
            <Route index element={<EnglishPage />} />
            <Route path='/recent-articles' element={<EnglishPage/>} />
            <Route path='/zh/recent-articles' element={<CantonesePage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ArticlesContextProvider>
  )
}

export default App
