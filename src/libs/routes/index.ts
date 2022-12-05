import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type IRouteList = {
    Login: undefined;
    Dashboard: undefined;
    Driver: undefined;
    CreateDriver: undefined;
    ForgotPassword: undefined;
    Shuttle: undefined;
    CreateShuttle: undefined;
    StopList: undefined;
    CreateStop: undefined;
};

export interface IRouteProps extends NativeStackScreenProps<IRouteList> {}

export default IRouteList;
