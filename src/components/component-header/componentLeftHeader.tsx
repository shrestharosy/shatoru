import { Icon } from '@rneui/themed';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { DrawerContext } from 'src/context/drawer_context';
import tw from 'src/styles/tailwind';

export default function ComponentLeftHeader() {
    const { toggleLeftDrawer } = useContext(DrawerContext);

    return (
        <View style={tw`relative flex flex-row items-center`}>
            {/* <Pressable onPress={toggleLeftDrawer}>
                <Image source={IMAGE.HAMBURGERMENU} />
            </Pressable> */}
            <Icon type="font-awesome-5" name="user-circle" color={'grey'} />
            <Text style={tw`font-bold ml-2 text-slate-500`}>Admin</Text>
        </View>
    );
}
