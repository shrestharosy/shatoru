import React from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerRight from 'src/components/component-drawer/drawerRight';

import ComponentCard from 'src/components/component-card';
import ComponentWrapper from 'src/components/component-wrapper';
import { IMAGE } from 'src/images';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface IDashboard extends IRouteProps {}

const Dashboard = ({ navigation }: IDashboard) => {
    return (
        <ComponentWrapper>
            <View style={tw`relative h-full`}>
                <DrawerRight />
                {/* <DrawerLeft navigation={navigation} /> */}
                <View style={tw`flex flex-row justify-around`}>
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
