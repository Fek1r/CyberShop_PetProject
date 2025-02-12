import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import NewJau from './new-jau/new-jau.jsx';
import Contact from './contact/contact.jsx';
import Projects from './reservation/reservation.jsx';
import Footer from './footer/footer.jsx'; 
import Location from './location/location.jsx';
import Solutions from './solution/solution.jsx'
import Park from './game/game.jsx'
import Planet from './info/info.jsx'
import Buy from './buy/buy.jsx'
import Login from './login/login.jsx'
import Profile from './profile/profile.jsx'


function App() {
  return (
    <Router>
      <Header />  {/* Компонент Header, если он нужен */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/new-jau" element={<NewJau />} /> {/* Страница для NewJau */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservation' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/location' element={<Location />} />
        <Route path='/solution' element={<Solutions />} />
        <Route path='/game' element={<Park />} />
        <Route path='/info' element={<Planet />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </Router>
    
  );
}

export default App;