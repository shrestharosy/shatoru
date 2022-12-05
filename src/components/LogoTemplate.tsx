import React, { FC } from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import tw from 'src/styles/tailwind';

interface LogoProps {
    image: ImageSourcePropType;
}

export const LogoTemplate: FC<LogoProps> = ({ image }) => {
    return (
        <View style={tw`py-16 px-8 bg-lightGray rounded-xl w-full`}>
            <Image source={image} style={tw`h-32 w-full`} />
            <Text
                style={tw`text-brownRed text-base text-center mt-2 font-bold`}
            >
                Shatoru
            </Text>
        </View>
    );
};

export default LogoTemplate;
