import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactElement, useEffect, useState } from 'react';
import { STORAGE } from 'src/libs/constants/storage';
import { authService } from 'src/services/auth';
import { IUser } from 'src/services/user/user.type';

interface IAuthContextValues {
    isLoading: boolean | null;
    isLoggedIn: boolean;
    user: IUser | null;
    login: (payload: ILogin) => void;
    logout: () => void;
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
    const [user, setUser] = useState<IUser>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        setAuthStatus();
    }, [token]);

    const login = async (payload: ILogin) => {
        try {
            const response = await authService.login(payload);
            const { token, ...rest } = response;
            AsyncStorage.setItem(STORAGE.TOKEN, token);
            AsyncStorage.setItem(STORAGE.USER, JSON.stringify(rest));
            setUser(user);
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
        AsyncStorage.removeItem(STORAGE.USER);
        setToken(null);
        setAuthStatus();
    };

    const setAuthStatus = async () => {
        setIsLoading(true);
        try {
            const activeToken = await AsyncStorage.getItem(STORAGE.TOKEN);
            const activeUser = await AsyncStorage.getItem(STORAGE.USER);
            if (!activeToken || !activeUser) {
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(true);
                const parsedUser = JSON.parse(activeUser);
                setUser(parsedUser);
            }
        } catch (error) {
            console.log(error);
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{ isLoading, isLoggedIn, user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
