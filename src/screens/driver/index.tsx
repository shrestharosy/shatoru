import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DriverRow from 'src/components/Driver/DriverRow';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { driverService } from 'src/services/driver';
import { IDriverResponse } from 'src/services/driver/driver.type';
import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

const Driver = ({ navigation }: IDriver) => {
    const [isLoading, setIsLoading] = useState(false);
    const [drivers, setDrivers] = useState<Array<IDriverResponse>>([]);

    useEffect(() => {
        getDrivers();
    }, []);

    const getDrivers = async () => {
        try {
            setIsLoading(true);
            const response = await driverService.fetchdrivers();
            setDrivers(response);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onDelete = async (id: number) => {
        try {
            setIsLoading(true);
            await driverService.deleteDriver(id);
            await getDrivers();
        } catch (error) {
            console.log(error.message);
            alert('Error while deleting driver');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <Card>
                <Card.Title style={tw`m-0 mb-2`}>
                    <Pressable
                        style={tw`bg-main p-2 rounded-md`}
                        onPress={() => navigation.navigate('CreateDriver')}
                    >
                        <Text style={tw`text-white`}>+ Create</Text>
                    </Pressable>
                </Card.Title>
                <Card.Divider />
                {isLoading && <Text>Loading...</Text>}
                {!isLoading &&
                    drivers.length > 0 &&
                    drivers.map((driver) => (
                        <DriverRow
                            key={driver.id}
                            driver={driver}
                            onDelete={onDelete}
                        />
                    ))}
                {!isLoading && drivers.length === 0 && (
                    <View>
                        <Text>No driver found</Text>
                    </View>
                )}
            </Card>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Driver);

const styles = StyleSheet.create({});
