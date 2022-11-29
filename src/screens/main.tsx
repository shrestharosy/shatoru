import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { AuthContext } from 'src/context/auth_context';
import IRouteList from 'src/libs/routes';
import Dashboard from './dashboard';
import DriverScreen from './driver';
import LoginScreen from './login';
import Shuttle from './shuttle';
import CreateShuttleScreen from './shuttle/create';
import CreateDriverScreen from './driver/create';
import ForgotPassword from './forgotPassword';

const Stack = createNativeStackNavigator<IRouteList>();

export default function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Dashboard'}
                        component={Dashboard}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'Driver'}
                        component={DriverScreen}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'CreateDriver'}
                        component={CreateDriverScreen}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'Shuttle'}
                        component={Shuttle}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'CreateShuttle'}
                        component={CreateShuttleScreen}
                        options={{ title: '' }}
                    />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Login'}
                        component={LoginScreen}
                        options={{ title: '', headerShown: false }}
                    />
                    <Stack.Screen
                        name={'ForgotPassword'}
                        component={ForgotPassword}
                        options={{ title: '' }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
