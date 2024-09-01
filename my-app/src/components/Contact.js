import React, { useEffect, useRef } from 'react';
import './Styles/Contact.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Button from './Button';

const Contact = () => {
    const contactSectionRef = useRef(null);

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

        if (contactSectionRef.current) {
            observer.observe(contactSectionRef.current);
        }

        return () => {
            if (contactSectionRef.current) {
                observer.unobserve(contactSectionRef.current);
            }
        };
    }, []);

    return (
        <div id="contactSection" className="contactSection" ref={contactSectionRef}>

            <div className="getInTouch"><span className="headingNumbers">3. </span>Contact</div>

            <div className="contactContainer">

                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                <p className="bigContact">Get In Touch</p>

                <div className="contactDetails">
                    <p>I'm always looking for opportunities to create new solutions and gain valuable experiences in the tech space. Feel free to reach out to me!</p>
                    <div className="socialIconsContainer">
                        <a href="https://www.linkedin.com/in/z-babar" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="socialIconsContact" size={30} />
                        </a>
                        <a href="https://github.com/ZainBabarr" target="_blank" rel="noopener noreferrer">
                            <FiGithub className="socialIconsContact" size={27} />
                        </a>
                        <a href="mailto:zainbabar360@gmail.com">
                            <MdOutlineMail className="socialIconsContact" size={30} />
                        </a>
                    </div>
                    <a href="mailto:zainbabar360@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button className="reachOutButton">Reach Out!</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
