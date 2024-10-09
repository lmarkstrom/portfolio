import React, { useState } from 'react';
import gameMenu from '../../assets/pictures/gameMenu.png';
import game1 from '../../assets/pictures/game1.png';
import game2 from '../../assets/pictures/game2.png';
import ywh1 from '../../assets/pictures/ywh1.png';
import ywh2 from '../../assets/pictures/ywh2.png';
import ywh3 from '../../assets/pictures/ywh3.png';
import ywh4 from '../../assets/pictures/ywh4.png';
import './projects.css';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState([false, false]);

  const toggleExpansion = (index) => {
    setExpandedProjects((prev) => {
      const newExpandedProjects = [...prev];
      newExpandedProjects[index] = !newExpandedProjects[index];
      return newExpandedProjects;
    });
  };

  return (
    <div className='aboutContainer'>
      <div className='flex-item notHidden'>
        <div className='textcontainer'>
          <h2 onClick={() => toggleExpansion(0)} className="clickable-header">
            Blackout {expandedProjects[0] ? '▲' : '▼'}
          </h2>
          <h3>Full 2D game engine from scratch</h3>
          <h4>05/2023 | With Elsa Linnéusson & Albin Alvenius</h4>
          {expandedProjects[0] && (
            <div className="image-container">
              <p>
                2D game with full engine from scratch. The game is a platformer with animation queues, cutscenes, menu, save/load system, sound effects,
                interactive design, and AI enemies. The game is made in Java with the Swing library, and it has a custom map manager, physics, and collision systems.
              </p>
              <img className='picture' src={gameMenu} alt="Game menu" />
              <img className='picture' src={game1} alt="Game 1" />
              <img className='picture' src={game2} alt="Game 2" />
            </div>
          )}
        </div>
      </div>

      <div className='flex-item notHidden'>
        <div className='textcontainer'>
          <h2 onClick={() => toggleExpansion(1)} className="clickable-header">
            Your Way Home {expandedProjects[1] ? '▲' : '▼'}
          </h2>
          <h3>Web app with geodata and database</h3>
          <h4>05/2023 | With Elsa Linnéusson, Oscar Witt, Felicia Murkes, Samuel Flodin, Ellen Kastensson, Adam Njeganovic</h4>
          {expandedProjects[1] && (
            <div className="image-container">
              <p>
                Team project developed for the company YWH wher we developed their web app and product prototype. The app is made
                using nodeJS and express for the backend. It uses a lot of Google APIs to handle geodata and maps. The app takes in 
                user rating and reviews and stores them in a database. The app also has admin access where all ratings can be shown.
                The app was hosted using Google Cloud Platform and the data base used SQLite.
              </p>
              <div className="box-image">
                <img className='picture' src={ywh1} alt="YWH 1" />
                <img className='picture' src={ywh2} alt="YWH 2" />
                <img className='picture' src={ywh3} alt="YWH 3" />
                <img className='picture' src={ywh4} alt="YWH 4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
