import React from 'react';
import About from './about';
import './body.css';
import Contact from './contact';
import Organization from './Organization';
import Projects from './projects';
import Skills from './skills/skills';
function Body() {
    return <div className='body'>
            <section id='about'>
                <About />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='organization'>
                <Organization />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
}

export default Body
