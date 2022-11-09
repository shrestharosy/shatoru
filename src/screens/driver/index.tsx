import React, { useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';

interface IDriver extends IRouteProps {}

const Driver = ({ navigation }: IDriver) => {
    useEffect(() => {
        getDrivers();
    }, []);

    const getDrivers = async () => {
        try {
        } catch (error) {}
    };

    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Create Driver"
                    onPress={() => navigation.navigate('CreateDriver')}
                />
            </View>
            <View>
                <Text>No driver found</Text>
            </View>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Driver);

const styles = StyleSheet.create({});
