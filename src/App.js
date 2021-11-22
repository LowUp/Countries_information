import './App.css';

// import pages
import Home from './pages/Home';
import About from './pages/About';

// Navigation package
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from './pages/404';
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">

  <BrowserRouter>
  <Navigation/>
  <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>


  </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
