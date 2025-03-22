import "./style.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactView() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">
                Feel free to reach out via email, phone, or connect with me on social media.
            </p>

            <div className="contact-info">
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <p><a href="mailto:linusmarkstrom@icloud.com">linusmarkstrom@icloud.com</a></p>
                </div>

                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <p><a href="tel:+46705177278">+46(70) 517 72 78</a></p>
                </div>

                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>Stockholm, Sweden</p>
                </div>

                <div className="social-links">
                    <a href="https://se.linkedin.com/in/linusmarkstrom" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/lmarkstrom" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}