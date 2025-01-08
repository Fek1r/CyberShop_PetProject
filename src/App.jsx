import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import NewJau from './new-jau/new-jau.jsx';
import Contact from './contact/contact.jsx';
import Projects from './project/Projects.jsx';
import Footer from './footer/footer.jsx'; 
import Location from './location/location.jsx';
import Solutions from './solution/solution.jsx'
import Park from './park/park.jsx'
import Planet from './planet/planet.jsx'
import Buy from './buy/buy.jsx'


function App() {
  return (
    <Router>
      <Header />  {/* Компонент Header, если он нужен */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/new-jau" element={<NewJau />} /> {/* Страница для NewJau */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/location' element={<Location />} />
        <Route path='/solution' element={<Solutions />} />
        <Route path='/park' element={<Park />} />
        <Route path='/planet' element={<Planet />} />
        <Route path='/buy' element={<Buy />} />

      </Routes>
    </Router>
  );
}

export default App;