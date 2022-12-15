import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerRight from 'src/components/component-drawer/drawerRight';

import ComponentCard from 'src/components/component-card';
import ComponentWrapper from 'src/components/component-wrapper';
import { IMAGE } from 'src/images';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';
import { AuthContext } from 'src/context/auth_context';
import { RoleEnum } from 'src/services/user/user.type';

interface IDashboard extends IRouteProps {}

const Dashboard = ({ navigation }: IDashboard) => {
    const { user } = useContext(AuthContext);

    return (
        <ComponentWrapper>
            <View style={tw`relative h-full`}>
                <DrawerRight />
                <View style={tw`flex flex-row justify-around`}>
                    <ComponentCard
                        navigation={navigation}
                        image={IMAGE.STOPS}
                        name="Stops"
                        route="StopList"
                        style="ml-4 bg-white"
                    />
                    {user && user.role === RoleEnum.ADMIN && (
                        <ComponentCard
                            image={IMAGE.BUS}
                            name="Shuttles"
                            navigation={navigation}
                            route="Shuttle"
                            style="bg-white"
                        />
                    )}
                </View>
                <>
                    <View style={tw`flex flex-row justify-around mt-4`}>
                        {user && user.role === RoleEnum.ADMIN && (
                            <ComponentCard
                                navigation={navigation}
                                image={IMAGE.DRIVER_ALT}
                                name="Drivers"
                                route="Drivers"
                                style="ml-4 bg-white"
                            />
                        )}
                        {/* <ComponentCard style={''} /> */}
                        <ComponentCard
                            navigation={navigation}
                            image={IMAGE.USER}
                            name="Account"
                            route="Account"
                            style="ml-4 bg-white"
                        />
                        {/* <ComponentCard
                            navigation={navigation}
                            image={IMAGE.DRIVER}
                            name="Drivers"
                            route="Driver"
                            style="ml-4 bg-white"
                        /> */}
                    </View>
                </>
            </View>
        </ComponentWrapper>
    );
};

export default withProtectedScreen(Dashboard);

const styles = StyleSheet.create({});
