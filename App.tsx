import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
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
