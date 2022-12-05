import { useContext } from 'react';
import { View, Image, Pressable, FlatList, Text } from 'react-native';
import { DrawerContext } from 'src/context/drawer_context';
import { IMAGE } from 'src/images';
import tw from 'src/styles/tailwind';
export default function ComponentLeftHeader() {
    const { toggleLeftDrawer } = useContext(DrawerContext);

    return (
        <View style={tw`relative flex flex-row items-center`}>
            <Pressable onPress={toggleLeftDrawer}>
                <Image source={IMAGE.HAMBURGERMENU} />
            </Pressable>
            <Text style={tw`font-bold ml-2 text-slate-500`}>
                UMD Shuttle Service
            </Text>
        </View>
    );
}
