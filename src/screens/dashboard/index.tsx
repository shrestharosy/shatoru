import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerLeft from 'src/components/component-drawer/drawerLeft';
import DrawerRight from 'src/components/component-drawer/drawerRight';

import ComponentCard from 'src/components/component-card';
import ComponentWrapper from 'src/components/component-wrapper';
import { AuthContext } from 'src/context/auth_context';
import { DrawerContext } from 'src/context/drawer_context';
import { IMAGE } from 'src/images';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface IDashboard extends IRouteProps {}

const Dashboard = ({ navigation }: IDashboard) => {
    const { logout } = useContext(AuthContext);
    const { isDrawerOpen } = useContext(DrawerContext);

    return (
        <ComponentWrapper>
            <View style={tw`relative h-full`}>
                <DrawerRight />
                <DrawerLeft navigation={navigation} />
                <View style={tw`flex flex-row`}>
                    <ComponentCard
                        image={IMAGE.BUS}
                        name="SHUTTLE"
                        navigation={navigation}
                        route="Shuttle"
                    />
                    <ComponentCard
                        navigation={navigation}
                        image={IMAGE.DRIVER}
                        name="DRIVER"
                        route="Driver"
                        style="ml-4"
                    />
                </View>
            </View>
        </ComponentWrapper>
    );
};

export default withProtectedScreen(Dashboard);

const styles = StyleSheet.create({});
