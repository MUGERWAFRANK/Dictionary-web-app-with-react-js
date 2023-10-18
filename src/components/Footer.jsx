/* eslint-disable no-unused-vars */
import React from 'react';
import NewWindow from '../assets/icon-new-window.svg';

const Footer = () => {
    return (
        <div>
            <hr className='my-5 mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px' />
            <div className='font-incosolata flex flex-row items-center'>
                <p className='my-5' style={{ color: 'grey' }}>
                    Source
                </p>
                <div className="font-inconsolata text-base font-normal leading-4 tracking-normal text-left">
                    <h3 className="px-4 text-black-600 flex items-center">
                        <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <span>https://en.wiktionary.org/wiki/keyboard</span>
                            <img src={NewWindow} alt="Icon" className="ml-2" />
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;



