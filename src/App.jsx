import React from "react";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-black text-white">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default App;