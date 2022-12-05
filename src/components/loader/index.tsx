import { View, ActivityIndicator } from 'react-native';
import tw from 'src/styles/tailwind';

const Loader = () => (
    <View style={tw`flex text-center justify-center items-center`}>
        <ActivityIndicator />
    </View>
);

export default Loader;
