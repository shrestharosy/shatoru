import { FC, useContext } from 'react';
import { AuthContext } from 'src/context/auth_context';
import Login from 'src/screens/login';

type withAuthenticationFn = (Component: FC<any>) => FC;

const withProtectedScreen: withAuthenticationFn = (Component) => {
    const Authenticated: FC = (props: any): JSX.Element | null => {
        const { isLoggedIn } = useContext(AuthContext);

        return isLoggedIn ? <Component {...props} /> : <Login />;
    };

    return Authenticated;
};

export default withProtectedScreen;
