import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import NewJau from './new-jau/new-jau';
import Contact from './contact/contact';
import Projects from './project/Projects.jsx';
import Footer from './footer/footer.jsx'; 


function App() {
  return (
    <Router>
      <Header />  {/* Компонент Header, если он нужен */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/new-jau" element={<NewJau />} /> {/* Страница для NewJau */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;