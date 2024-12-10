import React, { useEffect, useRef } from 'react';
import './Styles/Projects.css';
import projectImage1 from '../static/anicollection.png';
import projectImage2 from '../static/dailydoseoftech.png';
import projectImage3 from '../static/eventify.png';
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
                "Developed a platform for creating and sharing collaborative anime collections. " +
                "Used Firebase for secure user authentication and Firestore for efficiently storing collection and user data. " +
                "Integrated the Jikan API to search for anime and add them to their collections.",
            imgSrc: projectImage1,
            tools: ["ReactJS", "Jikan API", "Firebase", "Firestore"],
            gitLink: "https://github.com/ZainBabarr/anicollection",
            extLink: "https://anicollection.org",
        },
        {
            title: "Daily Dose of Tech",
            description:
                "Developed a Twitter bot to scrape content from tech news subreddits using Reddit's API (PRAW). " +
                "Automated tweets using an AWS Lambda function to call Twitter’s API (Tweepy) to post curated content daily. " +
                "Achieved over 3500 organic impressions, enhancing engagement and visibility.",
            imgSrc: projectImage2,
            tools: ["Python", "Tweepy", "PRAW"],
            gitLink: "https://github.com/ZainBabarr/DailyDoseOfTechBot",
            extLink: "https://x.com/Dose_ofTech",
        },

        {
            title: "Eventify",
            description:
                "Created a website for users to connect to their Spotify account for event recommendations. " +
                "Leveraged Spotify's Web API to access users' top listened-to artists. " +
                "Used Ticketmaster's API to fetch events, letting users view and add them to their Google and Apple calendars.",
            imgSrc: projectImage3,
            tools: ["ReactJS", "Spotify Web API", "Ticketmaster API"],
            gitLink: "https://github.com/ZainBabarr/Eventify",
            extLink: "https://eventify.one",
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
