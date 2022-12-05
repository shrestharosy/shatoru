import { Icon } from '@rneui/themed';
import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { DrawerContext } from 'src/context/drawer_context';
import tw from 'src/styles/tailwind';

export default function ComponentRightHeader() {
    const { toggleRightDrawer } = useContext(DrawerContext);
    return (
        <View style={tw`flex flex-row items-center`}>
            {/* <Text>Admin1</Text> */}
            <Pressable onPress={toggleRightDrawer}>
                {/* <Image source={IMAGE.DROPDOWN} /> */}
                <Icon type="entypo" name="chevron-small-down" />
            </Pressable>
        </View>
    );
}
