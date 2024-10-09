import React from 'react'
import './resume.css';

const Resume = () => {
  return (
    <div className='aboutContainer'>
        <div className='flex-item notHidden'>
            <div className='textcontainer'>
                <h2>WORK EXPERIENCE</h2>
                <h3>Ellevio | Connection management engineer</h3>
                <h4>06/2024-Now | Stockholm</h4>
                <p>
                    Summerjobb as a connection management engineer at Ellevio. Working as project manager for connection management projects. 
                    Planning and calculations of electic network areas. Continued as part time employee after the summer.
                </p>
                <h3>KTH Royal Institute of Technology | Teaching assistant in Database Technology</h3>
                <h4>10/2024-Now | Stockholm</h4>
                <p>
                    Part time teaching assistant in the course DD1368 Database Technology. Responsible for the labs and grading of the students during these sessions. 
                    I also was part of the development team that created the course material for the course.
                </p>
                <h3>FMDNC | Development Summer Intern</h3>
                <h4>06/2024-08/2024 | Kalskrona</h4>
                <p>
                    Summer internship where I and Rickard Anner development a digital logging system for the Swedish Armed Forces diving 
                    chambers to minize human error and extra unessicary.
                </p>
                <h3>Försvarsmakten | System Engineer Squad Leader</h3>
                <h4>06/2019-Now | Stockholm</h4>
                <p>
                    Full time system engineer in the Swedish navy on the corvette class ships. Held educational courses for officers and 
                    new recruits in the system engineering field. Part time since 2022.
                </p>
            </div>
        </div>
        <div className='flex-item notHidden'>
            <div className='textcontainer'>
                <h2>EDUCATION</h2>
                <h3>KTH Royal Institute of Technology | M.Sc. in Computer Science</h3>
                <h4>09/2022-Now | Stockholm</h4>
                <p>
                    Third year student in the M.Sc. program in computer science at KTH. Active in student associations in the project group for computer science
                    career fair for the last two years, first as salesman and now head of sales.
                </p>
                <h3>Försvarsmakten | Fighter jet mechanic</h3>
                <h4>09/2016-06/2019| Luleå</h4>
                <p>
                    Military service in the Swedish air force as a fighter jet mechanic. Worked with the JAS 39 Gripen fighter jet system for 9 mounth.
                </p>
                <h3>Minervagymnasium | Natural science programe</h3>
                <h4>09/2016-06/2019| Umeå</h4>
                <p>
                    Gymanasium studies with a focus on natural sciences.
                </p>
            </div>
        </div>
        <div className='flex-item notHidden'>
            <div className='textcontainer'>
                <h2>Technical</h2>
                <h3>Programming</h3>
                <ul>
                    <li>Java</li>
                    <li>C</li>
                    <li>Haskell</li>
                    <li>Prolog</li>
                    <li>PSQL</li>
                    <li>Matlab</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                </ul>
                <h3>Framework/systems</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>React</li>
                    <li>Google Cloud</li>
                    <li>Google APIs</li>
                    <li>Docker</li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premier</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
    </div>
  );

};

export default Resume