import kex from "../assets/kex.png";
import moviegram from "../assets/moviegram.png";
import moviegram2 from "../assets/moviegram-2.png";
import ywh from "../assets/ywh.svg";
import game1 from "../assets/game1.png";
import onlineChess from "../assets/online-chess.png";
import portfolio from "../assets/portfolio.png";

export const projectData = [
    {
        id: "1",
        type: "paper",
        title: "Image recognition with neural network and adversarial attacks",
        description: "Bachelor thesis project with focus on Cyber Security and Computer Science. The projects main goal is to evalauate a correlation between complexity of adversarial attacks and complexity of models trained on Spiking Neural Networks (SNN). The SNN is trained using backpropagtion. The neural network and adversarial attacks where implemented in python using snnTorch and pyTorch.",
        shortDescription: "Computer Science Bachelor thesis with focus on Cyber Security.",
        image: kex,
        github: "https://github.com/lmarkstrom/adversarial-attacks-SNN-BPTT",
        deploy: "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1985705&dswid=-3962"
    },
    {
        id: "2",
        type: "project",
        title: "Movie social media web-platform",
        description: "Web-app in the form of a social media platform for rating movies. The projects was developed using React, JavaScript and Firebase. The API used for fetching movie data was the TMDB API. An user authantication system amd database was implemented using Firebase. The platform allows user to search for movies, rate them, follow other user and see their ratins in a feed.",
        shortDescription: "Web-app using React, JS, Redux, Firebase",
        image: moviegram2,
        github: "https://github.com/lmarkstrom/moviegram",
        deploy: "https://movie-gram.web.app/"
    },
    {
        id: "3",
        type: "project",
        title: "Geodata webb-app",
        description: "Web-app as part of company-student collaboration project. The project was developed using several Google API´s and SQLite. The app allows users to search for geodata, such as coordinates, adresses and places. The app registers user ratings of areas and locations in the aspect of safety and security. The ratings shall be used to recommend safer routes. The app is directed mainly to women and queer people, as part of creating a safer society.",
        shortDescription: "Web-app using Google API´s and SQLite",
        image: ywh,
        github: "https://github.com/iAmSamFlo/YWH_PVK"
    },
    {
        id: "4",
        type: "project",
        title: "2D Java game-engine",
        description: "An 2D-game engine developed from scratch in Java. The engine is based on a game-loop, where the game-state is updated and rendered in a loop. The engine supports multiple game-objects, such as players, enemies and items. The engine also implements it´s own collision, physics, animation, cutscene and sound-effect system.",
        shortDescription: "2D game engine in Java",
        image: game1,
        github: "https://github.com/lmarkstrom/Blackout",
    },
    {
        id: "5",
        type: "project",
        title: "Online chess app",
        description: "A online chess engine with a lobby system. The frontend is built using Vue and the backend is built using Node.js. The engine is developed in JS and utilizes io actions, XSS protection and https.",
        shortDescription: "Chess app with engine and lobby",
        image: onlineChess,
        github: "https://github.com/lmarkstrom/online-chess"
    },
    {
        id: "6",
        type: "project",
        title: "Portfolio website",
        description: "A portfolio website built with React and Material UI. The website showcases my projects, skills and experience. It also includes a contact form and links to my social media profiles so .",
        shortDescription: "React and Material UI portfolio",
        image: portfolio,
        github: "https://github.com/lmarkstrom/portfolio",
        deploy: "https://lmarkstrom.github.io/portfolio/"
    }
];