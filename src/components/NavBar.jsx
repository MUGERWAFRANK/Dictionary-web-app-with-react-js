/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import arrow from '../assets/icon-arrow-down.svg';
import ThemeSwitcher from './ThemeHandler/ThemeSwitcher';

const NavBar = ({ onFontChange }) => {
    const [fontStyles] = useState(['serif', 'sans-serif', 'monospace']);
    const [selectedFontStyle, setSelectedFontStyle] = useState(fontStyles[0]);
    const [showFontList, setShowFontList] = useState(false);

    const handleFontChange = (fontStyle) => {
        setSelectedFontStyle(fontStyle);
        setShowFontList(false);
        onFontChange(fontStyle);
    };

    
    return (
        <div className='mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px' >
            <nav className="flex justify-between my-10 mx-10 h-20 flex-row items-center">
                <img src={logo} alt="SVG Image" />
                <div className="flex items-center relative group">
                    <h3
                        className="text-black-600 flex items-center cursor-pointer"
                        onClick={() => setShowFontList(!showFontList)}
                    >
                        {selectedFontStyle}
                        <img src={arrow} alt="Icon" className={`ml-2 transform ${showFontList ? 'rotate-90' : ''}`} />
                    </h3>
                    {showFontList && (
                        <ul className="absolute bg-white p-2 rounded-md shadow-md top-12 space-y-3 border dark:bg-black">
                            {fontStyles.map((fontStyle, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-black-600 hover:text-purple-500"
                                    onClick={() => handleFontChange(fontStyle)}
                                >
                                    {fontStyle}
                                </li>
                            ))}
                        </ul>
                    )}
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
