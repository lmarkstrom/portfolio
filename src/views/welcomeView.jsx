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
                <Slider slides={slides}/>
                <div>
                    <div>
                        <h1>
                            Hi, I am Linus
                        </h1>
                        <p>
                            I am a third student at KTH Royal Institute of Technology in Stockholm, 
                            pursuing Computer Science and Engineering and I am in my third year.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h1>
                            Software Developer
                        </h1>
                        <p>
                            I have experince in multiple programming languages, for instance:
                        </p>
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C#</li>
                            <li>Haskell</li>
                            <li>Go</li>
                            <li>JavaScript</li>
                        </ul>
                        <p>
                            I also have experince in multiple frameworks and libraries, for instance:
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>Git</li>
                            <li>.NET</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="icon-field">
                <span className="social-text">Check out my links: </span>
                <a href="https://se.linkedin.com/in/linusmarkstrom">
                    <img src="/src/assets/icons/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://github.com/lmarkstrom">
                    <img src="/src/assets/icons/github.png" alt="github" />
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