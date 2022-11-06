import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
interface LogoProps {
    image: string;
}

export const LogoTemplate: FC<LogoProps> = ({ image }) => {
    console.log(image);
    const tailwind = useTailwind();
    return (
        <View style={tailwind('py-16 px-8 bg-lightGray rounded-xl w-full')}>
            <Image
                source={require('../screens/login/loginpage_logo.png')}
                style={tailwind('h-32 w-full')}
            />
            <Text
                style={tailwind(
                    'text-brownRed text-base text-center mt-2 font-bold'
                )}
            >
                UMD Shuttle Service
            </Text>
        </View>
    );
};

export default LogoTemplate;
