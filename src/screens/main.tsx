import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import ComponentLeftHeader from 'src/components/component-header/componentLeftHeader';
import ComponentRightHeader from 'src/components/component-header/componentRightHeader';
import { AuthContext } from 'src/context/auth_context';
import IRouteList from 'src/libs/routes';
import Dashboard from './dashboard';
import DriverScreen from './driver';
import CreateDriverScreen from './driver/create';
import ForgotPassword from './forgotPassword';
import LoginScreen from './login';
import Shuttle from './shuttle';
import CreateShuttleScreen from './shuttle/create';
import StopListScreen from './stop';
import CreateStopScreen from './stop/create';

const Stack = createNativeStackNavigator<IRouteList>();

interface IProps extends NativeStackNavigationOptions {}

const headerDetail: IProps = {
    title: '',
    // headerBackground: () => '#FFCB05',
    headerLeft: () => <ComponentLeftHeader />,
    headerRight: () => <ComponentRightHeader />,
};

export default function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Dashboard'}
                        component={Dashboard}
                        options={headerDetail}
                    />
                    <Stack.Screen
                        name={'Driver'}
                        component={DriverScreen}
                        options={{ title: 'Drivers' }}
                    />
                    <Stack.Screen
                        name={'CreateDriver'}
                        component={CreateDriverScreen}
                        options={{ title: 'Add Driver' }}
                    />
                    <Stack.Screen
                        name={'Shuttle'}
                        component={Shuttle}
                        options={{ title: 'Shuttle' }}
                    />
                    <Stack.Screen
                        name={'CreateShuttle'}
                        component={CreateShuttleScreen}
                        options={{ title: 'Create Shuttle' }}
                    />
                    <Stack.Screen
                        name={'StopList'}
                        component={StopListScreen}
                        options={{ title: 'Stops' }}
                    />
                    <Stack.Screen
                        name={'CreateStop'}
                        component={CreateStopScreen}
                        options={{ title: 'Create Shuttle' }}
                    />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Login'}
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={'ForgotPassword'}
                        component={ForgotPassword}
                        options={{ title: 'Forgot Password' }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
