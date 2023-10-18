/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import play from '../assets/icon-play.svg';

export const Header = ({ audioUrl, word, phonetic }) => {
    const ref = useRef();

    const playAudio = () => {
    ref.current.play(); 
};


    return (
        <div className=' flex flex-row justify-between my-10 mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px '>
            <h3 className='font-bold text-3xl font-Inconsolata capitalize'>
                {word}
                <span className='block text-sm my-5 text-purple-500 '>
                    {phonetic}
                </span>
            </h3>
            <button onClick={playAudio} className='h-20 w-20 rounded-full'>
                <img src={play} alt="SVG Image" />
            </button>

            <audio className='hidden' ref={ref} src={audioUrl} />
        </div>
    );
};

export default Header;
