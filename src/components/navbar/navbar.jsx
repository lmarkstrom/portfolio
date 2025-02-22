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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export { Navbar };