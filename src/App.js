import {BrowserRouter,Routes,Route} from 'react-router-dom';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import NavBar from './components/NavBar';


import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Home/>
      <Gallery/>
      <Plans/>
      <Trainers/>
      <About/>
      <Contact/>
      <NotFound/>
    </BrowserRouter>
  );
};

export default App;
