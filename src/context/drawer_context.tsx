import React, { createContext, useContext, useState } from 'react';

export const DrawerContext = createContext(null);

export function DrawerProvider({ children }) {
    const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

    function toggleLeftDrawer() {
        setIsLeftDrawerOpen((prev) => !prev);
        setIsRightDrawerOpen(false);
    }

    function toggleRightDrawer() {
        setIsRightDrawerOpen((prev) => !prev);
        setIsLeftDrawerOpen(false);
    }
    return (
        <DrawerContext.Provider
            value={{
                isLeftDrawerOpen,
                isRightDrawerOpen,
                toggleRightDrawer,
                toggleLeftDrawer,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
}
