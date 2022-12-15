import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type IRouteList = {
    Login: undefined;
    Dashboard: undefined;
    Drivers: undefined;
    Driver: DriverParams;
    CreateDriver: undefined;
    ForgotPassword: undefined;
    Shuttle: undefined;
    CreateShuttle: undefined;
    ScheduleList: ScheduleListParams;
    StopList: undefined;
    CreateStop: undefined;
    Account: undefined;
};

type ScheduleListParams = {
    shuttleId: number;
};

type DriverParams = {
    driverId: number;
};

export interface IRouteProps extends NativeStackScreenProps<IRouteList, any> {}

export default IRouteList;
