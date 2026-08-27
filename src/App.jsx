import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Practices from "./components/Practices";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Affiliates from "./components/Affiliates";
import Skills from "./components/Skills";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav mark="Yogesh Modi" />

      <main>
        <Hero />
        <About />
        <Practices />
        <Experience />
        <Projects />
        <Affiliates />
        <Skills />
        <FAQ />
      </main>

      <Contact />
    </>
  );
}
