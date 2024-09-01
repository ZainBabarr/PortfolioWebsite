import React, { useEffect, useRef } from 'react';
import './Styles/AboutMe.css';

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
                    <p>Hello! My name is <span className="about-me-content-important">Zain Babar</span>. I'm a passionate software engineer who loves to innovate, design, and build new things. My interest in coding began during the Covid-19 lockdown where I spent much of my free time learning <span className="about-me-content-important">Python</span> and <span className="about-me-content-important">Java</span>.</p>
                    <p>Fast-forward to today, I've learned how to use <span className="about-me-content-important">React</span>, <span className="about-me-content-important">HTML</span>, <span className="about-me-content-important">CSS</span>, and <span className="about-me-content-important">JavaScript</span> for web design. As well, <span className="about-me-content-important">Firebase</span> and <span className="about-me-content-important">Firestore</span> for user authentication and storing info.</p>
                    <p>I've built many projects using API's such as Reddit (PRAW), Twitter (Tweepy), and Jikan API to build a <span className="about-me-content-important">Twitter bot</span> and an<span className="about-me-content-important"> anime sharing website</span>.</p>
                    <p>Right now, I'm heading into my first term at <span className="about-me-content-important">Wilfrid Laurier University</span> where I'm studying <span className="about-me-content-important">Computer Science</span> and <span className="about-me-content-important">Business Administration</span>.</p>
                    <p>I'm currently searching for <span className="about-me-content-important">software development internships</span> to get some hands-on experience and put my skills to work. If you're interested, feel free to reach out!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
