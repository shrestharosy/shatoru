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
        // <SafeAreaView>
        //     <View>
        //         <Button title="Log Out" onPress={() => logout()} />
        //     </View>

        //     <View>
        //         <Button
        //             title="Driver"
        //             onPress={() => navigation.navigate('Driver')}
        //         />
        //     </View>
        //     <View>
        //         <Button
        //             title="Shuttle"
        //             onPress={() => navigation.navigate('Shuttle')}
        //         />
        <ComponentWrapper>
            <View style={tw`relative h-full`}>
                <DrawerRight />
                <DrawerLeft navigation={navigation} />
                <View style={tw`flex flex-row`}>
                    <ComponentCard
                        image={IMAGE.BUS}
                        name="SHUTTLE"
                        navigation={navigation}
                        route="Driver"
                    />
                    <ComponentCard
                        navigation={navigation}
                        image={IMAGE.DRIVER}
                        name="DRIVER"
                        route="CreateDriver"
                        style="ml-4"
                    />
                </View>
            </View>
        </ComponentWrapper>
    );
};

export default withProtectedScreen(Dashboard);

const styles = StyleSheet.create({});
