import React, { useState, useEffect, useRef  } from 'react';
import './Header.css';

const Header = ({ activeTab, setActiveTab }) => {
    // const [activeTab, setActiveTab] = useState(0);
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabsRef = useRef(null);

    useEffect(() => {
        const tabsContainerWidth = tabsRef.current.offsetWidth;
        const tabWidth = tabsContainerWidth / 4;
        setUnderlineStyle({
            width: `${tabWidth}px`,
            left: `${activeTab * tabWidth}px`
        });
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        const tabsContainerWidth = document.querySelector('.tabs').offsetWidth;
        const tabWidth = tabsContainerWidth / 4;
        setUnderlineStyle({
            width: `${tabWidth}px`,
            left: `${index * tabWidth}px`
        });
    };

    return (
        <div className="header">
            <div className="name">
                <h1>Linus Markström Portfolio</h1>
            </div>
            <div className='tabContainer' ref={tabsRef}>
                <ul className="tabs">
                    <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>About</li>
                    <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Projects</li>
                    <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Resume</li>
                    <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Contact</li>
                    
                </ul>
                <div className="underline" style={underlineStyle}></div>
            </div>
        </div>
    );
    
};

export default Header
