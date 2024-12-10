import React, { useEffect, useRef } from 'react';
import './Styles/AboutMe.css';
import Button from './Button';

const AboutMe = () => {

    const aboutMeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <section id="aboutMeSection" className="about-me-section" ref={aboutMeRef}>
            <div className="about-me-container">
                <h2 className="section-heading"><span className="headingNumbers">1.</span> About Me</h2>
                <div className="about-me-content">
                    <p>Hi, I'm <span className="about-me-content-important">Zain Babar</span> - a first year Computer Science and Business Administration student! I started coding during the Covid-19 lockdown, learning <span className="about-me-content-important">Python</span> and <span className="about-me-content-important">Java</span>.</p>

                    <p>Since then, I've learned <span className="about-me-content-important">React</span>, <span className="about-me-content-important">HTML</span>, <span className="about-me-content-important">CSS</span>, <span className="about-me-content-important">JavaScript</span>, and <span className="about-me-content-important">Firebase</span>. I've also worked with various <span className="about-me-content-important">APIs</span>, such as <span className="about-me-content-important">PRAW</span>, <span className="about-me-content-important">Tweepy</span>, <span className="about-me-content-important">Spotify</span>, <span className="about-me-content-important">Jikan</span>, and <span className="about-me-content-important">Ticketmaster</span>. I've created a <a href="https://x.com/Dose_ofTech" target="_blank" rel="noopener noreferrer" className="about-me-content-important">Twitter bot</a>, an <a href="https://anicollection.org" target="_blank" rel="noopener noreferrer" className="about-me-content-important">anime site</a>, and an <a href="https://eventify.one" target="_blank" rel="noopener noreferrer" className="about-me-content-important">event discovery app</a>.</p>

                    <p>Currently I'm looking for <span className="about-me-content-important">software development internships</span> to gain practical experience!</p>


                </div>
                <a href="https://www.linkedin.com/in/z-babar/" target="_blank" rel="noopener noreferrer">
                    <Button className="connectWithMe">Connect with me!</Button>
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
