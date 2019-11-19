import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import Portfolio from './Components/Pages/Portfolio';
// import Background from './sunset1.jpg';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Router>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
