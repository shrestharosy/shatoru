import { DrawerProvider } from 'src/context/drawer_context';
import { AuthProvider } from './src/context/auth_context';
import Main from './src/screens/main';

export default function App() {
    return (
        <AuthProvider>
            <DrawerProvider>
                <Main />
            </DrawerProvider>
        </AuthProvider>
    );
}
