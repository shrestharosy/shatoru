import React, { useContext } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { AuthContext } from 'src/context/auth_context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';

interface IDashboard extends IRouteProps {}

const Dashboard = ({ navigation }: IDashboard) => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View>
                <Button title="Log Out" onPress={() => logout()} />
            </View>

            <View>
                <Button
                    title="Driver"
                    onPress={() => navigation.navigate('Driver')}
                />
            </View>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Dashboard);

const styles = StyleSheet.create({});
