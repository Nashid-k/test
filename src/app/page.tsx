import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Values from "@/components/sections/Values";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Values />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}
