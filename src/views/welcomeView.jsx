import { Slider } from "/src/components/slider/slider.jsx";
import "./style.css"

export function WelcomeView(props){
    const slides = [];
    return (
        <div className="welcome-view">
            <Slider slides={slides}/>
            <div className="icon-field">
                <a href="https://se.linkedin.com/in/linusmarkstrom">
                    <img src="/src/assets/icons/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://github.com/lmarkstrom">
                    <img src="/src/assets/icons/github.png" alt="github" />
                </a>
            </div>
        </div>
    );
}