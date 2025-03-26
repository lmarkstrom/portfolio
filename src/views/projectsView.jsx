import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { projectData } from "./data/project-data.js";
import "./style.css";

export function ProjectsView(props){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");

    const projectRefs = {
        project1: useRef(null),
        project2: useRef(null),
        project3: useRef(null),
        project4: useRef(null),
        // project5: useRef(null),
    };

    useEffect(() => {
        if (scrollTo && projectRefs[scrollTo]) {
            projectRefs[scrollTo].current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scrollTo]);

    const projects = projectData;

    return (
        <div className="projects-container">
            <h1 className="project-title">My Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        ref={projectRefs[project.id]}
                        className="project-card"
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}