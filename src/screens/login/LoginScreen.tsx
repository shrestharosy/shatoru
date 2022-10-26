import { useContext } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { color } from '../../styles/color';

const LoginScreen = () => {
    const { isLoading, login, logout, isLoggedIn } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 30 }}>
                <TextInput
                    placeholder={'Email Address'}
                    keyboardType={'email-address'}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.inputField}
                />
                <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: color.blue }}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => login()}
                >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    inputField: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    loginButton: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
        backgroundColor: color.blue,
        marginTop: 25,
    },
    loginText: {
        color: '#FFF',
    },
});
