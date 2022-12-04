import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import ComponentLeftHeader from 'src/components/component-header/componentLeftHeader';
import ComponentRightHeader from 'src/components/component-header/componentRightHeader';
import IRouteList from 'src/libs/routes';
import Dashboard from './dashboard';
import DriverScreen from './driver';
import CreateDriverScreen from './driver/create';
import ForgotPassword from './forgotPassword';
import LoginScreen from './login';
import ScheduleScreen from './schedule';

const Stack = createNativeStackNavigator<IRouteList>();

interface IProps extends NativeStackNavigationOptions {}

const headerDetail: IProps = {
    title: '',
    // headerBackground: () => '#FFCB05',
    headerLeft: () => <ComponentLeftHeader />,
    headerRight: () => <ComponentRightHeader />,
};

export default function Main() {
    // const { isLoggedIn } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

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
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'CreateDriver'}
                        component={CreateDriverScreen}
                        options={{ title: '' }}
                    />
                    <Stack.Screen
                        name={'Schedule'}
                        component={ScheduleScreen}
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
