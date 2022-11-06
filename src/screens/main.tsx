import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { AuthContext } from 'src/context/auth_context';
import Dashboard from './dashboard';
import LoginScreen from './login/LoginScreen';
import { ForgetPassword } from './forgetPassword/ForgetPassword';

export default function Main() {
    const tailwind = useTailwind();
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <View style={tailwind('py-12 px-4')}>
            {isLoggedIn ? <Dashboard /> : <ForgetPassword />}
        </View>
    );
}
