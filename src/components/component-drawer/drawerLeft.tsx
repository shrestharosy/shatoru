import React, { useContext, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { DrawerContext } from 'src/context/drawer_context';
import tw from 'src/styles/tailwind';

interface IDrawerLeftProps {
    //  navigation : NativeStackNavigationProp<IRouteList>
    navigation: any;
}

interface IDrawerOption {
    id: string;
    name: string;
}

export default function DrawerLeft({ navigation }: IDrawerLeftProps) {
    const { isLeftDrawerOpen } = useContext(DrawerContext);

    const [drawerOption] = useState<Array<IDrawerOption>>([
        { name: 'Dashboard', id: '1' },
        { name: 'Driver', id: '2' },
        // { name: 'Shuttle', id: '3' },
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
                renderItem={({ item: { name } }) => {
                    return (
                        <View style={tw`py-4 px-4 border-b-2`}>
                            <Pressable
                                onPress={() => navigation.navigate(name)}
                            >
                                <Text style={tw`text-base`}>{name}</Text>
                            </Pressable>
                        </View>
                    );
                }}
            />
        </View>
    );
}
