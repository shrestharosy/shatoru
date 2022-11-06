import { AuthProvider } from './src/context/auth_context';
import Main from './src/screens/main';

export default function App() {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
}
