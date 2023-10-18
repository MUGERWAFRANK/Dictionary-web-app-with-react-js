/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const SwitchToggle = ({ theme, onToggle }) => {
    const [isSelected, setIsSelected] = useState(theme === 'light');

    const handleToggle = () => {
        setIsSelected(!isSelected);
        onToggle();
    };

        return (
            <div
            className={`mx-auto sm:max-w-345px md:max-w-738px lg:max-w-1240px flex w-10 h-5 rounded-full ${
            isSelected ? 'bg-purple-500' :  'bg-gray-600'
            }`}
            onClick={handleToggle}
        >
            <span
            className={`h-5 w-5 ml-1 bg-white rounded-full transform transition-transform ${
                isSelected ? 'translate-x-full' : '-translate-x-1'
            }`}
            />
    </div>
    );
};

export default SwitchToggle;