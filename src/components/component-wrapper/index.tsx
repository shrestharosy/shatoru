import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

interface IComponentWrapper {
    children: JSX.Element;
}

export default function ComponentWrapper(props: IComponentWrapper) {
    const tailwind = useTailwind();

    return <View style={tailwind('py-12 px-4')}>{props.children}</View>;
}
