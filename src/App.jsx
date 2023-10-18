/* eslint-disable no-unused-vars */

  

 
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './app.css';


function App() {
  const [fontStyles] = useState(['serif', 'sans-serif', 'monospace']);
  const [selectedFontStyle, setSelectedFontStyle] = useState(fontStyles[0]);
  
  const handleFontChange = (fontStyle) => {
    setSelectedFontStyle(fontStyle);
};

return (
  <div className="mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px bg-white dark:bg-black text-black dark:text-white selectedFontStyle={selectedFontStyle} onFontChange={setSelectedFontStyle}">
    <NavBar onFontChange={handleFontChange} />
    <Search selectedFontStyle={selectedFontStyle} onFontChange={setSelectedFontStyle} />
  </div>
);
}

export default App;

     
 