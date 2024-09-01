import React, { useState, useRef, useEffect } from 'react';
import './Styles/Navbar.css';
import Button from './Button';
import resumePDF from '../static/Zain Babar Resume V3.pdf';
const Navbar = () => {
    const [navbarAtTop, setNavbarAtTop] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarAtTop(window.scrollY === 0);
        };

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const yOffset = -100;

        if (sectionId === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (sectionId === '#contactSection') {
            const contactSection = document.querySelector(sectionId);
            const y = contactSection.offsetTop;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
            const section = document.querySelector(sectionId);
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setSidebarOpen(false);
    };

    return (
        <div>
            <div className={`navbar ${!navbarAtTop ? 'shadow' : ''}`}>
                <svg onClick={() => scrollToSection('#top')} xmlns="http://www.w3.org/2000/svg" className="navbar-svg" viewBox="0 0 24 24">
                    <g>
                        <path d="m 2 6 l 0 -4 l 19 0 l 0 18 L 2 20 l 0 -5 m 4 -10 l 11 0 l -11 12 L 17 17" strokeWidth="1.3" transform="scale(1.1)" />
                    </g>
                </svg>
                <ul className="NavbarElements">
                    <Button onClick={() => scrollToSection('#aboutMeSection')}><span className="number">1.</span> About Me</Button>
                    <Button onClick={() => scrollToSection('#projectsSection')}><span className="number">2.</span> Projects</Button>
                    <Button onClick={() => scrollToSection('#contactSection')}><span className="number">3.</span> Contact</Button>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                        <Button className="resumeButton">Resume</Button>
                    </a>
                </ul>
                <button className="sidebarToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    &#9776;
                </button>
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                <button className="closeSidebar" onClick={() => setSidebarOpen(false)}>×</button>
                <Button onClick={() => scrollToSection('#aboutMeSection')}><span className="number">1.</span> About Me</Button>
                <Button onClick={() => scrollToSection('#projectsSection')}><span className="number">2.</span> Projects</Button>
                <Button onClick={() => scrollToSection('#contactSection')}><span className="number">3.</span> Contact</Button>
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    <Button className="resumeButtonSidebar">Resume</Button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
