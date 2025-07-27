// components/CursorContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CursorContext.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
