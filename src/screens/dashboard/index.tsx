import React, { useContext, useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';
import DrawerRight from 'src/components/component-drawer/drawerRight';
import DrawerLeft from 'src/components/component-drawer/drawerLeft';

import ComponentWrapper from 'src/components/component-wrapper';
import { AuthContext } from 'src/context/auth_context';
import { DrawerContext } from 'src/context/drawer_context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';
import { IMAGE } from 'src/images';
import ComponentCard from 'src/components/component-card';

interface IDashboard extends IRouteProps {}

const Dashboard = ({ navigation }: IDashboard) => {
    const { logout } = useContext(AuthContext);
    const { isDrawerOpen } = useContext(DrawerContext);

    return (
        <ComponentWrapper>
            <View style={tw`relative h-full`}>
                <DrawerRight />
                <DrawerLeft navigation={navigation} />
                <View style={tw`flex`}>
                    <Pressable onPress={() => navigation.navigate('Driver')}>
                        <Text>sdfa</Text>
                    </Pressable>
                    <ComponentCard image={IMAGE.SHUTTLE} name="SHUTTLE" />
                    <ComponentCard
                        image={IMAGE.DRIVER}
                        name="DRIVER"
                        style="mt-4"
                    />
                </View>
            </View>
        </ComponentWrapper>
    );
};

export default Dashboard;

const styles = StyleSheet.create({});
