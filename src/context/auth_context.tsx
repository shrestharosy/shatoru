import { createContext, ReactElement, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE } from 'src/libs/constants/storage';

interface IAuthContextValues {
    isLoading: boolean | null;
    login: () => void;
    logout: () => void;
    isLoggedIn: boolean;
}

export const AuthContext = createContext<IAuthContextValues>({
    isLoading: null,
    login: () => null,
    logout: () => null,
    isLoggedIn: false,
});

export const AuthProvider = ({ children }: { children: ReactElement }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const login = () => {
        const token = 'something';
        AsyncStorage.setItem(STORAGE.TOKEN, token);
        setToken(token);
        setAuthStatus();
    };

    const logout = () => {
        AsyncStorage.removeItem(STORAGE.TOKEN);
        setToken(null);
        setAuthStatus();
    };

    const setAuthStatus = async () => {
        setIsLoading(true);
        try {
            const activeToken = await AsyncStorage.getItem(STORAGE.TOKEN);
            if (!activeToken) {
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setAuthStatus();
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoading, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
