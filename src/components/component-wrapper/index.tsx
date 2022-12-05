import { View, SafeAreaView } from 'react-native';
import tw from 'src/styles/tailwind';

interface IComponentWrapper {
    children: JSX.Element;
}

export default function ComponentWrapper(props: IComponentWrapper) {
    return (
        <SafeAreaView>
            <View style={tw`py-2 px-4`}>{props.children}</View>
        </SafeAreaView>
    );
}
