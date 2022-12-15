import { Card } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Loader from 'src/components/loader';
import { AuthContext } from 'src/context/auth_context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { driverService } from 'src/services/driver';
import { IDriverResponse } from 'src/services/driver/driver.type';
import { shuttleService } from 'src/services/shuttle';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import { RoleEnum } from 'src/services/user/user.type';
import tw from 'src/styles/tailwind';

interface IAccountProps extends IRouteProps {}

const Account = ({ navigation }: IAccountProps) => {
    const { user } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [driver, setDriver] = useState<IDriverResponse>(null);
    const [shuttles, setShuttles] = useState<Array<IShuttleResponse>>([]);
    const [assignedShuttle, setAssignedShuttle] = useState(null);

    useEffect(() => {
        if (user.role === RoleEnum.DRIVER) {
            getDriver(user.id);
            fetchShuttles();
        }
    }, [user.role]);

    useEffect(() => {
        if (driver) {
            getAssignedShuttle(driver.shuttles);
        }
    }, [driver]);

    const getDriver = async (driverId: number) => {
        try {
            setIsLoading(true);
            const response = await driverService.fetchDriver(driverId);
            setDriver(response);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchShuttles = async () => {
        try {
            const response = await shuttleService.fetchShuttles();
            setShuttles(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getAssignedShuttle = (shuttleIds: Array<string>) => {
        const filteredShuttles = shuttles.filter((shuttle) =>
            shuttleIds.filter((id) => id === shuttle.id)
        );
        if (filteredShuttles.length > 0) {
            setAssignedShuttle(filteredShuttles[0].name);
        }
    };

    return (
        <SafeAreaView>
            <Card>
                <Text style={tw`text-lg mb-3`}>
                    {user.first_name} {user.last_name}
                </Text>
                <Text>{user.email}</Text>
                {isLoading && <Loader />}
                {assignedShuttle && <Text>{assignedShuttle}</Text>}
            </Card>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Account);

const styles = StyleSheet.create({});
