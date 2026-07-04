
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Milestones from "./components/Milestones";


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Milestones />
      </main>
      
    </>
  );
}

export default App;