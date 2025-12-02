import { Slider } from "../components/slider/slider.jsx";
import "./style.css";
import { AiOutlineFundProjectionScreen, AiOutlineContacts } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Container, Box, Typography, Button, IconButton } from "@mui/material";

export function WelcomeView(props){
    const slides = [];

    return (
        <Container className="py-8">
            <Box className="grid md:grid-cols-2 gap-8 items-start">
                <Box className="slider-frame">
                    <Slider slides={slides} />
                </Box>

                <Box>
                    <Typography variant="h3" component="h1" className="mb-4">
                        Hi, I am Linus
                    </Typography>
                    <Typography paragraph className="mb-4">
                        I am a third student at KTH Royal Institute of Technology in Stockholm,
                        pursuing Computer Science and Engineering and beginning my masters this
                        autumn.
                    </Typography>

                    <hr className="my-4" />

                    <Typography variant="h5" className="mb-2">Software Developer</Typography>
                    <Typography className="mb-2">I have experience in multiple programming languages, for instance:</Typography>

                    <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <ul className="list-disc pl-5">
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C#</li>
                            <li>Haskell</li>
                        </ul>
                        <ul className="list-disc pl-5">
                            <li>Assembly</li>
                            <li>SQL</li>
                            <li>Go</li>
                            <li>JavaScript</li>
                        </ul>
                    </Box>

                    <Typography className="mb-2">I also have experience in multiple frameworks and libraries, for instance:</Typography>
                    <Box className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <ul className="list-disc pl-5">
                            <li>React</li>
                            <li>Vue</li>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>Redux</li>
                            <li>Express</li>
                        </ul>
                        <ul className="list-disc pl-5">
                            <li>Git</li>
                            <li>.NET</li>
                            <li>AWS</li>
                            <li>Google Cloud</li>
                            <li>Firebase</li>
                            <li>Linux</li>
                        </ul>
                        <ul className="list-disc pl-5">
                            <li>Java Swing</li>
                            <li>SDL2</li>
                            <li>Haskell cursor</li>
                            <li>pyTorch</li>
                            <li>SNNTorch</li>
                        </ul>
                    </Box>

                </Box>
            </Box>

            <Box className="flex items-center mt-6 space-x-4">
                <Typography>Check out my links:</Typography>
                <IconButton component="a" href="https://se.linkedin.com/in/linusmarkstrom" aria-label="LinkedIn">
                    <FaLinkedin />
                </IconButton>
                <IconButton component="a" href="https://github.com/lmarkstrom" aria-label="GitHub">
                    <FaGithub />
                </IconButton>
            </Box>

            <Box className="flex mt-6 space-x-4">
                <Button variant="outlined" startIcon={<AiOutlineFundProjectionScreen />} onClick={moveToProjects}>Projects</Button>
                <Button variant="outlined" startIcon={<AiOutlineContacts />} onClick={moveToContact}>Connect</Button>
            </Box>
        </Container>
    );

    function moveToProjects(){
        window.location = "#/projects";
    }
    function moveToContact(){
        window.location = "#/contact";
    }
}