import React, { useEffect, useRef } from 'react';
import './Styles/Experience.css';
import Button from './Button';

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Add class when visible
                        observer.unobserve(entry.target); // Stop observing once it's visible
                    }
                });
            },
            { threshold: 0.15 } // Adjust threshold for when it's considered visible
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current); // Start observing the section
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current); // Clean up observer
            }
        };
    }, []);

    const jobs = [
        {
            title: "Data Analytics Intern",
            company: "Bruce Power",
            duration: "May 2025 - August 2025",
            description: "Regulatory Affairs Department",
            extLink: "https://brucepower.com",
        },
        {
            title: "Software Engineer",
            company: "Laurier Computing Society",
            duration: "January 2025 - April 2025",
            description: "Building an interview scheduling platform",
            extLink: "https://lauriercs.ca/",
        },
        {
            title: "App Developer",
            company: "Pagent.tv",
            duration: "December 2024 - March 2025",
            description: "Developed the frontend for the mobile app",
            extLink: "https://pagent.tv",
        },
    ];

    return (
        <section id="experienceSection" className="experience-section fade-in" ref={experienceRef}>
            <h2 className="section-heading">
                <span className="headingNumbers">1.</span> Experience
            </h2>
            <div className="timeline">
                {jobs.map((job, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <p className="jobTitle">{job.title}</p>
                            <a href={job.extLink} target="_blank" rel="noopener noreferrer" className="company">
                                {job.company}
                            </a>
                            <p className="duration">{job.duration}</p>
                            <p>{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <a href="/Zain Babar Resume V5.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="resumeButtonExperience">My Resume</Button>
            </a>
        </section>
    );
};

export default Experience;
