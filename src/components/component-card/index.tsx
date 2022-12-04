import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { IMAGE } from 'src/images';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface ICardProps {
    image: any;
    name: string;
    style?: string;
}

export default function ComponentCard(props: ICardProps) {
    const { image, name, style } = props;
    return (
        <View style={tw`${style} bg-white rounded-xl h-52 w-52 p-2`}>
            <View style={tw`relative`}>
                <Image source={image} style={tw`h-4/5 w-full`} />
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
                <Text style={tw`text-2xl font-bold`}>{name}</Text>
                <Pressable onPress={() => console.log('Dashboard')}>
                    <View style={tw`rounded-full w-10 h-10 bg-main`}>
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
