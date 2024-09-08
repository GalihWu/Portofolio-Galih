import './App.css';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Project from './components/project';
import Skill from './components/skill';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
