import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
// import Projects from './components/Projects/Projects';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Offer />
          {/* <Projects /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
