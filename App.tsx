import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/context/auth_context';
import Main from './src/screens/main';

export default function App() {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
