import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Loader from 'src/components/loader';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { driverService } from 'src/services/driver';
import { IDriverResponse } from 'src/services/driver/driver.type';
import { shuttleService } from 'src/services/shuttle';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

const Driver = ({ navigation, route }: IDriver) => {
    const [isLoading, setIsLoading] = useState(false);
    const [driver, setDriver] = useState<IDriverResponse>(null);
    const [shuttles, setShuttles] = useState<Array<IShuttleResponse>>([]);
    const [assignedShuttle, setAssignedShuttle] = useState(null);

    useEffect(() => {
        const driverId = route?.params?.driverId;
        if (driverId) {
            getDriver(driverId);
        }
    }, [route?.params?.driverId]);

    useEffect(() => {
        fetchShuttles();
    }, []);

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
                <Card.Title style={tw`m-0 mb-2`}>
                    {driver && driver.first_name} {driver && driver.last_name}
                </Card.Title>
                <Card.Divider />
                {isLoading && <Loader />}
                {driver && <Text>Email : {driver.email}</Text>}
                {driver && <Text>Username : {driver.username}</Text>}
                {assignedShuttle && (
                    <Text>Assigned Shuttle : {assignedShuttle}</Text>
                )}
            </Card>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Driver);

const styles = StyleSheet.create({});
