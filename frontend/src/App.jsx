import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './Pages/home/home.jsx';
//import About from './about/about.jsx';
import NewJau from './Pages/new-jau/new-jau.jsx';
import Contact from './Pages/contact/contact.jsx';
import Projects from './Pages/reservation/reservation.jsx';
import Footer from './components/footer/footer.jsx'; 
import Location from './Pages/location/location.jsx';
import Solutions from './Pages/solution/solution.jsx'
import Park from './Pages/game/game.jsx'
import Planet from './Pages/info/info.jsx'
import Buy from './Pages/buy/buy.jsx'
import Login from './Pages/login/login.jsx'
import Profile from './Pages/profile/profile.jsx'


function App() {
  return (
    <Router>
      <Header />  {/* Компонент Header, если он нужен */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/new-jau" element={<NewJau />} /> {/* Страница для NewJau */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservation' element={<Projects />} />
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