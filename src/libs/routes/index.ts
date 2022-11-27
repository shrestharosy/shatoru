import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type IRouteList = {
    Login: undefined;
    Dashboard: undefined;
    Driver: undefined;
    CreateDriver: undefined;
    ForgotPassword: undefined;
    Schedule: undefined;
};

export interface IRouteProps extends NativeStackScreenProps<IRouteList> {}

export default IRouteList;
