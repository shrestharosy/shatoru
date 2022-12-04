import { View, Text, Image, Pressable } from 'react-native';
import { useContext } from 'react';
import { DrawerContext } from 'src/context/drawer_context';
import { IMAGE } from 'src/images';
import tw from 'src/styles/tailwind';

export default function ComponentRightHeader() {
    const { toggleRightDrawer } = useContext(DrawerContext);
    return (
        <View style={tw`flex flex-row items-center`}>
            <Text>Admin1</Text>
            <Pressable onPress={toggleRightDrawer}>
                <Image source={IMAGE.DROPDOWN} />
            </Pressable>
        </View>
    );
}
