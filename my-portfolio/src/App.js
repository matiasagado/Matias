import React from "react";
import "./App.css";

// Import components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        {/* These sections will be implemented later */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p>About Section.</p>
        </section>

        <Projects />

        <Skills />

        <Contact />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Matias Agado. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
