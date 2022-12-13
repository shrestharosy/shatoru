import React, { createContext, useState } from 'react';

export const DrawerContext = createContext(null);

export function DrawerProvider({ children }) {
    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

    function toggleRightDrawer() {
        setIsRightDrawerOpen((prev) => !prev);
    }
    return (
        <DrawerContext.Provider
            value={{
                isRightDrawerOpen,
                toggleRightDrawer,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
}
