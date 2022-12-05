import React, { useContext, useState } from 'react';
import { View, Pressable, Text, FlatList } from 'react-native';
import { AuthContext } from 'src/context/auth_context';
import { DrawerContext } from 'src/context/drawer_context';
import tw from 'src/styles/tailwind';

export default function DrawerRight() {
    const { isRightDrawerOpen } = useContext(DrawerContext);
    const { logout } = useContext(AuthContext);

    const [drawerOption] = useState([{ name: 'Log Out', id: '1' }]);

    return (
        <View
            style={tw`absolute ${
                isRightDrawerOpen !== true && 'hidden'
            } -top-2 right-0 z-20`}
        >
            <FlatList
                data={drawerOption}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={tw`bg-white p-2`}>
                            <Pressable
                                onPress={() =>
                                    item?.name === 'Log Out' && logout()
                                }
                            >
                                <Text style={tw`text-sm`}>{item?.name}</Text>
                            </Pressable>
                        </View>
                    );
                }}
            />
        </View>
    );
}
