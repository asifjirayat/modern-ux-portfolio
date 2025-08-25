import Navigation from "./components/layouts/Navigation.jsx";
import Hero from "./components/sections/Hero.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layouts/Footer.jsx";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero id="home" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default App;
