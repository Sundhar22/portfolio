import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Services from "./components/services/Services";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <>
    
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Projects />
        <Contact />
      
      </main>
        <Footer/>
        <ScrollUp/>
      
    </>
  );
}

export default App;
