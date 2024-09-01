import React, { useEffect, useRef } from 'react';
import './Styles/Projects.css';
import projectImage1 from '../static/anicollection.png';
import projectImage2 from '../static/dailydoseoftech.png';
import projectImage3 from '../static/portfolio.png';
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";

const ProjectsSection = () => {
    const projectsSectionRef = useRef(null);

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

        const currentRef = projectsSectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const projects = [
        {
            title: "AniCollection",
            description:
                "Developed a responsive platform for creating and sharing anime collections using ReactJS. " +
                "Used Firebase for user authentication and logging in and Firestore for storing anime collections. " +
                "Integrated Jikan API for anime search and details.",
            imgSrc: projectImage1,
            tools: ["ReactJS", "HTML", "CSS", "Jikan API", "Firebase", "Firestore"],
            gitLink: "https://github.com/ZainBabarr/anicollection",
            extLink: "https://anicollection.com",
        },
        {
            title: "Daily Dose of Tech",
            description:
                "Developed a Twitter bot in Python using Reddit’s API (PRAW) to scrape content from tech news subreddits. " +
                "Automated tweets using Twitter’s API (Tweepy) to post curated content every 4 hours. " +
                "Achieved over 1000 impressions, enhancing engagement and visibility.",
            imgSrc: projectImage2,
            tools: ["Python", "Tweepy", "PRAW"],
            gitLink: "https://github.com/ZainBabarr/DailyDoseOfTechBot",
            extLink: "https://x.com/Dose_ofTech",
        },

        {
            title: "Portfolio Website",
            description:
                "Built a modern portfolio website with ReactJS, featuring a dynamic navigation system and project showcase. " +
                "Developed React components for seamless navigation and engaging animations. " +
                "Ensured a responsive design with CSS for a consistent user experience across all devices.",
            imgSrc: projectImage3,
            tools: ["ReactJS", "HTML", "CSS", "JavaScript"],
            gitLink: "https://github.com/username/portfolio",
            extLink: "https://zainbabar.com",
        },
    ];

    return (
        <div id="projectsSection" className="projectsSection" ref={projectsSectionRef}>
            <div className="thingsContainer">
                <div className="somethings">
                    <span className="headingNumbers">2.</span> Some Things I've Made
                </div>
            </div>

            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <div key={index} className="projectWrapper">
                        <div className="project">
                            <div className="projectContent">
                                <a href={project.extLink} target="_blank" rel="noreferrer" className="projectTitleLink">
                                    <p className="projectTitle">{project.title}</p>
                                </a>
                                <div className="projectDescription">
                                    {project.description.split(". ").map((sentence, idx) => (
                                        <div key={idx} className="descriptionPoint">• {sentence}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="imageContent">
                                <a href={project.extLink} target="_blank" rel="noreferrer">
                                    <img src={project.imgSrc} alt={`Project ${index + 1}`} className="projectImage" />
                                </a>
                            </div>
                            <em className="codingLanguages">{project.tools.join(" • ")}</em>
                        </div>
                        <div className="projectLinksWrapper">
                            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                                <FiGithub className="projectLinksGithub" size={24} />
                            </a>
                            <a href={project.extLink} target="_blank" rel="noopener noreferrer">
                                <TbExternalLink className="projectLinksExtLink" size={40} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
