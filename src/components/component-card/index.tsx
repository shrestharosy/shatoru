import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { IMAGE } from 'src/images';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface ICardProps {
    image: any;
    name: string;
    style?: string;
    navigation: any;
    route: string;
}

export default function ComponentCard(props: ICardProps) {
    const { image, name, style, navigation, route } = props;
    return (
        <View style={tw`${style} bg-white rounded-xl h-40 w-40 p-2`}>
            <View style={tw`relative`}>
                <Image
                    source={image}
                    style={tw`h-4/5 w-2/3 mx-auto`}
                    resizeMode="contain"
                />
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
                <Text style={tw`text-xl font-bold`}>{name}</Text>
                <Pressable onPress={() => navigation.navigate(route)}>
                    <View style={tw`rounded-full w-6 h-6 bg-main`}>
                        <Image
                            source={IMAGE.ADD}
                            style={tw`w-full h-full text-black `}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
