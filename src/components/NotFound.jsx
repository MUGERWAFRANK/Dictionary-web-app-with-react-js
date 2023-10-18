/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mx-auto sm:max-w-375px md:max-w-768px lg:max-w-1440px">
        <div className="text-4xl mb-3">😕</div>
        <h2 className="text-2xl font-semibold mb-3">No Definitions Found</h2>
        <p style={{ color: 'grey' }}>
            Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.
        </p>
        </div>
    );
};

export default NotFound;
