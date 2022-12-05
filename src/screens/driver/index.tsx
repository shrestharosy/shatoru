import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { driverService } from 'src/services/driver';
import { IDriverResponse } from 'src/services/driver/driver.type';

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

    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Create Driver"
                    onPress={() => navigation.navigate('CreateDriver')}
                />
            </View>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading &&
                drivers.length > 0 &&
                drivers.map((driver, index) => (
                    <View>
                        <Text>{index + 1}</Text>
                        <Text>{driver.email}</Text>
                        <Text>{driver.first_name}</Text>
                        <Text>{driver.last_name}</Text>
                    </View>
                ))}
            {!isLoading && drivers.length === 0 && (
                <View>
                    <Text>No driver found</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default withProtectedScreen(Driver);

const styles = StyleSheet.create({});
