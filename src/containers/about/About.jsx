import React, { useEffect, useState } from 'react';
import portrait from '../../assets/pictures/portratt.jpg';
import './about.css';

const About = () => {
    const [showArrow, setShowArrow] = useState(true);
    const offset = 200; 
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.flex-item');
            items.forEach(item => {
                const rect = item.getBoundingClientRect();

                if (rect.top < window.innerHeight - offset && rect.bottom > offset) {
                    item.classList.add('fade-in');
                    item.classList.remove('hidden');
                }
            });

            if (window.scrollY > 0) {
                setShowArrow(false);
            }
        };

        const items = document.querySelectorAll('.flex-item');
        items.forEach(item => {
            item.classList.add('hidden');
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);
  return (
    <div className='aboutContainer'>
        {showArrow && (
            <div className="scroll-arrow">
                <p>WELCOME TO MY PORTFOLIO</p>
                <div className="arrow"></div>
                <p>SCROLL DOWN</p>
            </div>
        )}
        <div className='top'>

        </div>
        <div className='flex-item hidden'>
            <div className='pictureContainer'>
                <img className='picture' src={portrait} alt="Portrait" />
            </div>
            <div className='textcontainer'>
                <p>
                    My name is Linus Markström and I am a third year M.Sc student in computer science at
                    KTH Royal Institute of Technology. I was born in Umeå Sweden in the year 2000, where I grew up
                    and later was called up for military service in the air force as a fighter-jet 
                    mechanic. After my service I worked in the Navy for two years as a System Engineer before I 
                    began my studies at KTH.
                        
                </p>
            </div>
        </div>
        <div className='flex-item hidden'>
            <div className='textcontainer'>
                <h2>Interest</h2>
                <p>
                    I have always been interested in technology and how things work. I have been programming since I was 16 years old
                    and have always had a passion for learning new things. I have a wide range of interests, for example programming, 
                    drawing and digital design. I have been drawing my entire life and this has over time turned more into
                    digital design instead.
                </p>
            </div>
        </div>
        <div className='flex-item hidden'>
            <div className='textcontainer'>
                <h2>Activities</h2>
                <p>
                    I have always been a very active person and I have been doing sports my entire life. I have been playing all kinds of 
                    sport but mostly badminton, floorball and icehockey. Today I enjoy playing disc-golf and working out at the gym. I am also very 
                    active in the student life at KTH and I have been part of management group first as salesman and now as Head of Sales for the data chapters annual 
                    career fair. 
                </p>
            </div>
        </div>
    </div>
  );

};

export default About