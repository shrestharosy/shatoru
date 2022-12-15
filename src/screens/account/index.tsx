import { Card } from '@rneui/themed';
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { AuthContext } from 'src/context/auth_context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface IAccountProps extends IRouteProps {}

const Account = ({ navigation }: IAccountProps) => {
    const { user } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Card>
                <Text style={tw`text-lg mb-3`}>
                    {user.first_name} {user.last_name}
                </Text>
                <Text>{user.email}</Text>
            </Card>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Account);

const styles = StyleSheet.create({});
