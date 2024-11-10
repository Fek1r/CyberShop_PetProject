import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Head from './head/head.jsx';
import Home from './home/home.jsx'



function App() {
  return (
    <Router>
      <Head/>
      <Home/>
      <Routes>
        
      </Routes>

    </Router>
  );
}

export default App;