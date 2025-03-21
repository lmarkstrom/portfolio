import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <AiOutlineClose className="menu-icon" />
                ) : (
                    <AiOutlineMenu className="menu-icon" />
                )}
            </div>
            
            <div className={isOpen ? "nav-links active" : "nav-links"}>
                <ul>
                    <li><a href="#" onClick={() => setIsOpen(!isOpen)}>Home</a></li>
                    <li><a href="#/projects" onClick={() => setIsOpen(!isOpen)}>Projects</a></li>
                    <li><a href="#/contact" onClick={() => setIsOpen(!isOpen)}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export { Navbar };