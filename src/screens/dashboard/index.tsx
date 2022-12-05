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
                {/* <DrawerLeft navigation={navigation} /> */}
                <View style={tw`flex flex-row justify-around`}>
                    {user && user.role === RoleEnum.ADMIN && (
                        <>
                            <ComponentCard
                                navigation={navigation}
                                image={IMAGE.DRIVER}
                                name="Drivers"
                                route="Driver"
                                style="ml-4"
                            />
                            <ComponentCard
                                image={IMAGE.BUS}
                                name="Shuttles"
                                navigation={navigation}
                                route="Shuttle"
                            />
                        </>
                    )}
                </View>
            </View>
        </ComponentWrapper>
    );
};

export default withProtectedScreen(Dashboard);

const styles = StyleSheet.create({});
