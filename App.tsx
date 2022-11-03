import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn/dist';
import utilities from './tailwind.json';
import { AuthProvider } from './src/context/auth_context';
import Main from './src/screens/main';

export default function App() {
    return (
        // @ts-ignore
        <TailwindProvider utilities={utilities}>
            <AuthProvider>
                <Main />
            </AuthProvider>
        </TailwindProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
