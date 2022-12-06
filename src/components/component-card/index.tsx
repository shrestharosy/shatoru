import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'src/styles/tailwind';

interface ICardProps {
    name?: string;
    image?: any;
    style?: string;
    navigation?: any;
    route?: string;
}

export default function ComponentCard(props: ICardProps) {
    const { image, name, style, navigation, route } = props;
    return (
        <Pressable onPress={() => navigation && navigation.navigate(route)}>
            <View style={tw`${style} rounded-xl h-30 w-30 p-2`}>
                <View style={tw`relative`}>
                    <Image
                        source={image}
                        style={tw`h-4/5 w-2/3 mx-auto`}
                        resizeMode="contain"
                    />
                </View>
                <View style={tw`flex flex-row justify-center items-center`}>
                    <Text style={tw``}>{name}</Text>
                    {/* <View style={tw`rounded-full w-6 h-6 bg-main`}>
                        <Image
                            source={IMAGE.ADD}
                            style={tw`w-full h-full text-black `}
                        />
                    </View> */}
                </View>
            </View>
        </Pressable>
    );
}
