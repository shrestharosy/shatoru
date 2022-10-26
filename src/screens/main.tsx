import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Dashboard from './dashboard';
import LoginScreen from './login/LoginScreen';

export default function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            {isLoggedIn ? <Dashboard /> : <LoginScreen />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
