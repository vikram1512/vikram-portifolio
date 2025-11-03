import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
      <div className="App">
        <Navbar />

        <main>
          <section id="hero">
            <div className="container">
              <Hero />
            </div>
          </section>

          <section id="about">
            <div className="container">
              <h2 className="section-title">About</h2>
              <About />
            </div>
          </section>

          <section id="experience">
            <div className="container">
              <h2 className="section-title">Experience</h2>
              <Experience />
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <h2 className="section-title">Projects</h2>
              <Projects />
            </div>
          </section>

          <section id="skills">
            <div className="container">
              <h2 className="section-title">Skills</h2>
              <Skills />
            </div>
          </section>

          <section id="metrics">
            <div className="container">
              <h2 className="section-title">Metrics</h2>
              <Metrics />
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <h2 className="section-title">Contact</h2>
              <Contact />
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
}

export default App;