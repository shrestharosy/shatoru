import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactElement, useEffect, useState } from 'react';
import { STORAGE } from 'src/libs/constants/storage';
import { authService } from 'src/services/auth';

interface IAuthContextValues {
    isLoading: boolean | null;
    login: (payload: ILogin) => void;
    logout: () => void;
    isLoggedIn: boolean;
}

export const AuthContext = createContext<IAuthContextValues>({
    isLoading: null,
    isLoggedIn: false,
} as IAuthContextValues);

interface IAuthProviderProps {
    children: ReactElement;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        setAuthStatus();
    }, [token]);

    const login = async (payload: ILogin) => {
        try {
            const response = await authService.login(payload);
            AsyncStorage.setItem(STORAGE.TOKEN, response.token);
            setToken(token);
            setAuthStatus();
        } catch (error) {
            console.log(error);
            alert(error.message);
            throw error;
        }
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

    return (
        <AuthContext.Provider value={{ isLoading, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
