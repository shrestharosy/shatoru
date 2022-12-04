import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useContext } from 'react';
import { View, Pressable, Text, FlatList } from 'react-native';
import { DrawerContext } from 'src/context/drawer_context';
import IRouteList, { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface IDrawerLeftProps {
    //  navigation : NativeStackNavigationProp<IRouteList>
    navigation: any;
}
export default function DrawerLeft({ navigation }: IDrawerLeftProps) {
    const { isLeftDrawerOpen } = useContext(DrawerContext);

    const [drawerOption] = useState([
        { name: 'Dashboard', id: '1' },
        { name: 'Driver', id: '2' },
        { name: 'Shuttle', id: '3' },
    ]);

    return (
        <View
            style={tw`absolute ${
                isLeftDrawerOpen != true && 'hidden'
            } z-20 -left-4 -top-2 h-full bg-white`}
        >
            <FlatList
                data={drawerOption}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={tw`py-4 px-4 border-b-2`}>
                            <Pressable
                                onPress={(item: any) =>
                                    navigation.navigate(item?.name)
                                }
                            >
                                <Text style={tw`text-base`}>{item?.name}</Text>
                            </Pressable>
                        </View>
                    );
                }}
            />
        </View>
    );
}
