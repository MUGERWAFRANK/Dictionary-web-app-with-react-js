/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';
import NotFound from './NotFound';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

    const Search = ({ selectedFontStyle, onFontChange }) => {
    const [word, setWord] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');

    const searchWord = async () => {
        if (word.trim() === '') {
            setError('Whoops, can’t be empty...');
            return;
        }
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
        if (response.ok) {
            const data = await response.json();
            setResults(data[0]);
            setError('');
        } else {
            setResults([]);
            setError('');
        }
    };
    const handleInputChange = (e) => {
        setWord(e.target.value);
        setError('');
    };
    return (
        <div className="mx-10 sm:max-w-345px md:max-w-738px lg:max-w-1240px">
            <input
                type="text"
                value={word}
                onChange={handleInputChange}
                className={`w-full text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 outline-none rounded-lg px-5 py-5 shadow focus:ring focus:ring-purple-500 ${
                    error ? 'border border-red-500' : ''
                }`}
                placeholder={error ? '' : 'Search for any word...'}
            />
            <button className=" sm:max-w-375px md:max-w-768px lg:max-w-1440px -mx-20 px-10" onClick={searchWord}>
                <img src={SearchIcon} alt="SVG Image" />
            </button>

            <div className="text-red-500 text-sm mt-2">
                {error}
            </div>
            {results ? (
                <>
                    {results.meanings && results.meanings.length > 0 ? (
                        <Header
                            audioUrl={results.phonetics[0].audio}
                            word={word}
                            phonetic={results.phonetics[0].text}
                            
                        />
                    ) : null}
                    {results.meanings && results.meanings.length > 0 ? (
                        results.meanings.map((content, index) => {
                            return <Content {...content} selectedFontStyle={selectedFontStyle} key={index} />;
                        })
                    ) : (
                        
                        <NotFound />
                    )}
                    <Footer />
                </>
            ) : null}
    
        </div>
    );
};

export default Search;







