import React from 'react';
import './Styles/Intro.css';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

const Intro = () => {
    return (
        <div className="intro">
            <ul className="IntroElements">
                <p className="hey">Hi, my name is</p>
                <p className="name">Zain Babar.</p>
                <p className="nameSubHeading">I'm a software engineer.</p>
                <p className="introDescription">
                    I'm a <span className="importantIntroDescription">Computer Science </span>
                    and <span className="importantIntroDescription">Business Administration </span>
                    student at <span className="importantIntroDescription">Wilfrid Laurier University </span>
                    who loves creating tech solutions with people, for people. Feel free to reach out!
                </p>
            </ul>

            <div className="socialIconsContainer">
                <a href="https://www.linkedin.com/in/zain-babar" target="_blank" rel="noopener noreferrer" className="socialIcons">
                    <FaLinkedinIn className="socials" size={33} />
                </a>
                <a href="https://github.com/ZainBabarr" target="_blank" rel="noopener noreferrer" className="socialIcons">
                    <FiGithub className="socials" size={30} />
                </a>
                <a href="mailto:zainbabar360@gmail.com" className="socialIcons">
                    <MdOutlineMail className="socials" size={35} />
                </a>
            </div>
        </div>
    );
}

export default Intro;
