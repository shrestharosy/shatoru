import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from 'src/context/auth_context';
import IRouteList from 'src/libs/routes';
import Dashboard from './dashboard';
import DriverScreen from './driver';
import LoginScreen from './login';
import CreateDriverScreen from './driver/create';

const Stack = createNativeStackNavigator<IRouteList>();

export default function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator>
                    <Stack.Screen name={'Dashboard'} component={Dashboard} />
                    <Stack.Screen name={'Driver'} component={DriverScreen} />
                    <Stack.Screen
                        name={'CreateDriver'}
                        component={CreateDriverScreen}
                    />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
