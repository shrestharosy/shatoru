import { Icon } from '@rneui/themed';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from 'src/context/auth_context';
import { DrawerContext } from 'src/context/drawer_context';
import tw from 'src/styles/tailwind';

export default function ComponentLeftHeader() {
    const { toggleLeftDrawer } = useContext(DrawerContext);
    const { user } = useContext(AuthContext);

    return (
        <View style={tw`relative flex flex-row items-center`}>
            {/* <Pressable onPress={toggleLeftDrawer}>
                <Image source={IMAGE.HAMBURGERMENU} />
            </Pressable> */}
            <Icon type="font-awesome-5" name="user-circle" color={'grey'} />
            <Text style={tw`font-bold ml-2 text-slate-500`}>
                {user && `${user.first_name} ${user.last_name}`}
            </Text>
        </View>
    );
}
