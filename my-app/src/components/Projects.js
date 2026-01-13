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
                "An online platform for creating, managing, and sharing anime collections. Users can securely sign in, search for anime titles, and add them to their custom collections.",
            imgSrc: projectImage1,
            tools: ["ReactJS", "Jikan API", "Firebase", "Firestore"],
            gitLink: "https://github.com/ZainBabarr/anicollection",
            extLink: "https://ani-collection.netlify.app/",
        },
        {
            title: "Daily Dose of Tech",
            description:
                "A Twitter bot automated with AWS Lambda that tweets out daily tech news by gathering content from Reddit. Through tweets, the bot has gained 30,000+ impressions",
            imgSrc: projectImage2,
            tools: ["Python", "Tweepy", "PRAW", "AWS Lambda"],
            gitLink: "https://github.com/ZainBabarr/DailyDoseOfTechBot",
            extLink: "https://x.com/Dose_ofTech",
        },

        {
            title: "Eventify",
            description:
                "A web app that suggest concerts and events based on users’ favorite Spotify artists, allowing them to explore, track, and add events to their Google and Apple calendars.",
            imgSrc: projectImage3,
            tools: ["ReactJS", "Spotify Web API", "Ticketmaster API"],
            gitLink: "https://github.com/ZainBabarr/Eventify",
            extLink: "https://eventifyfyi.netlify.app/",
        },
    ];

    return (
        <div id="projectsSection" className="projectsSection" ref={projectsSectionRef}>
            <div className="thingsContainer">
                <div className="somethings">
                    <span className="headingNumbers">2.</span> Some Things I've Made
                </div>
            </div>

            <div className="threeProjects">

                <div className="project">
                    <div className="twoDivs">
                        {/* Image Section */}
                        <div className="image">
                            <a href={projects[0].extLink} target="_blank" rel="noopener noreferrer">
                                <img src={projectImage1} alt="AniCollection" className="projectImage" />
                            </a>
                        </div>

                        {/* Description Section */}
                        <div className="descriptionSection">
                            <p className="featured">Featured Project</p>
                            <p className="projectTitle">{projects[0].title}</p>
                            <div className="description">
                                <p>{projects[0].description}</p>
                            </div>
                            <div className="tools">
                                {projects[0].tools.map((tool, idx) => (
                                    <span key={idx} className="tool">{tool}</span>
                                ))}
                            </div>
                            <div className="projectLinkIcons">

                                <a href={projects[0].gitLink} target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="projectLinks" />
                                </a>

                                <a href={projects[0].extLink} target="_blank" rel="noopener noreferrer">
                                    <TbExternalLink className="projectLinks" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="twoDivs">
                        {/* Description Section */}
                        <div className="descriptionSectionREVERSE">
                            <p className="featuredREVERSE">Featured Project</p>
                            <p className="projectTitleREVERSE">{projects[1].title}</p>
                            <div className="descriptionREVERSE">
                                <p>{projects[1].description}</p>
                            </div>
                            <div className="toolsREVERSE">
                                {projects[1].tools.map((tool, idx) => (
                                    <span key={idx} className="tool">{tool}</span>
                                ))}
                            </div>
                            <div className="projectLinkIconsREVERSE">

                                <a href={projects[1].gitLink} target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="projectLinksREVERSE" />
                                </a>
                                <a href={projects[1].extLink} target="_blank" rel="noopener noreferrer">
                                    <TbExternalLink className="projectLinksREVERSE" />
                                </a>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="image">
                            <a href={projects[1].extLink} target="_blank">
                                <img src={projectImage2} alt="Daily Dose of Tech" className="projectImage" />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="project">
                    <div className="twoDivs">
                        {/* Image Section */}
                        <div className="image">
                            <a href={projects[2].extLink} target="_blank">
                                <img src={projectImage3} alt="Eventify" className="projectImage" />
                            </a>
                        </div>

                        {/* Description Section */}
                        <div className="descriptionSection">
                            <p className="featured">Featured Project</p>
                            <p className="projectTitle">{projects[2].title}</p>
                            <div className="description">
                                <p>{projects[2].description}</p>
                            </div>


                            <div className="tools">
                                {projects[2].tools.map((tool, idx) => (
                                    <span key={idx} className="tool">{tool}</span>
                                ))}
                            </div>

                            <div className="projectLinkIcons">

                                <a href={projects[2].gitLink} target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="projectLinks" />
                                </a>
                                <a href={projects[2].extLink} target="_blank" rel="noopener noreferrer">
                                    <TbExternalLink className="projectLinks" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );

};

export default ProjectsSection;
