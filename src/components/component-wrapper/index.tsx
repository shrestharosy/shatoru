import { View } from 'react-native';
import tw from 'src/styles/tailwind';

interface IComponentWrapper {
    children: JSX.Element;
}

export default function ComponentWrapper(props: IComponentWrapper) {
    return <View style={tw`py-12 px-4`}>{props.children}</View>;
}
