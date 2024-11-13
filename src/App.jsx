import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './head/head.jsx';
import Home from './home/home.jsx';
import NewJau from './new-jau/new-jau';
import Contact from './contact/contact';
import Projects from './projects/Projects.jsx';
import Footer from './footer/footer.jsx'; 

function App() {
  return (
    <Router>
      <Head />  {/* Компонент Header, если он нужен */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/new-jau" element={<NewJau />} /> {/* Страница для NewJau */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;