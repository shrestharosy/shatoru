import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'src/styles/tailwind';

interface LogoProps {
    image: string;
}

export const LogoTemplate: FC<LogoProps> = ({ image }) => {
    return (
        <View style={tw`py-16 px-8 bg-lightGray rounded-xl w-full`}>
            <Image
                source={require('../screens/login/loginpage_logo.png')}
                style={tw`h-32 w-full`}
            />
            <Text
                style={tw`text-brownRed text-base text-center mt-2 font-bold`}
            >
                UMD Shuttle Service
            </Text>
        </View>
    );
};

export default LogoTemplate;
