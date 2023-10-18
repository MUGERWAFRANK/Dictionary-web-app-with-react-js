/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


const Content = ({ selectedFontStyle, partOfSpeech, definitions, synonyms, verb, }) => {
    const contentStyles = {
        fontFamily: selectedFontStyle,
    };

    return (
        <div className='my-3 mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px ' style={contentStyles}>
            <div className='flex flex-row items-center text-lg font-bold'>
                <p>{partOfSpeech}</p>
                <hr className='w-full ml-10' />
            </div>
            <p className='my-5' style={{ color: 'grey' }}>Meaning</p>
            <ul className='list-disc my-3 px-10 text-sm space-y-2' style={{ color: 'grey-800' }}>
                {definitions.map((def, index) => (
                    <li key={index}>
                        {def.definition}
                    </li>
                ))}
            </ul>
            {partOfSpeech === 'noun' && synonyms.length > 0 && (
            <div className='font-incosolata flex flex-row items-center'>
                <p className='my-5' style={{ color: 'grey' }}>
                    Synonyms: {synonyms.map((synonym, index) => (
                        <span key={index} className="text-purple-600 mx-1 underline">{synonym}</span>
                    ))}
                </p>
            </div>
            )}

            {verb && (
            <div className='flex flex-row items-center my-6 text-lg font-bold font-serif'>
                <p>{definitions[0].definition}</p>
                <hr className='w-full ml-10' />
            </div>
            )}
        </div>
    );
};

export default Content;
