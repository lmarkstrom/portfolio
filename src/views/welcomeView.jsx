import { Slider } from "/src/components/slider/slider.jsx";
import "./style.css";
import { AiOutlineFundProjectionScreen, AiOutlineContacts, AiOutlineAudit } from "react-icons/ai";

export function WelcomeView(props){
    const slides = [];
    
    const goToProject = (project) => {
        navigate(`/projects#${project}`);
    };

    return (
        <div className="welcome-view">
            <div className="top-content">
                <div className="slider-frame">
                    <Slider  slides={slides}/>
                </div>
                
                <div className="details">
                    <div>
                        <h1>
                            Hi, I am Linus
                        </h1>
                        <p>
                            I am a third student at KTH Royal Institute of Technology in Stockholm, 
                            pursuing Computer Science and Engineering and beginning my masters this 
                            autumn.
                        </p>
                    </div>
                    <hr />
                    <div >
                        <h1>
                            Software Developer
                        </h1>
                        <p>
                            I have experince in multiple programming languages, for instance:
                        </p>
                        <div className="list-container">
                            <div>
                                <ul>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>C</li>
                                    <li>C#</li>
                                    <li>Haskell</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Assembly</li>
                                    <li>SQL</li>
                                    <li>Go</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                        
                        <p>
                            I also have experince in multiple frameworks and libraries, for instance:
                        </p>
                        <div className="list-container">
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Vue</li>
                                    <li>Node.js</li>
                                    <li>Next.js</li>
                                    <li>Redux</li>
                                    <li>Express</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Git</li>
                                    <li>.NET</li>
                                    <li>AWS</li>
                                    <li>Google Cloud</li>
                                    <li>Firebase</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Java Swing</li>
                                    <li>SDL2</li>
                                    <li>Haskell cursor</li>
                                    <li>pyTorch</li>
                                    <li>SNNTorch</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="icon-field">
                <span className="social-text">Check out my links: </span>
                <a href="https://se.linkedin.com/in/linusmarkstrom">
                    <img src="/portfolio/images/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://github.com/lmarkstrom">
                    <img src="/portfolio/images/github.png" alt="github" />
                </a>
            </div>
            <div className="bottom-content">
                <div onClick={moveToProjects}>
                    <AiOutlineFundProjectionScreen className="shortcut-icon" />
                    <h2>Projects</h2>
                </div>
                <div onClick={moveToContact}>
                    <AiOutlineContacts className="shortcut-icon" />
                    <h2>Connect</h2>
                </div>
                {/* <div>
                    <AiOutlineAudit className="shortcut-icon" />
                    <h2>Resume</h2>
                </div> */}
            </div>
        </div>
    );

    function moveToProjects(){
        window.location = "#/projects";
    }
    function moveToContact(){
        window.location = "#/contact";
    }
}