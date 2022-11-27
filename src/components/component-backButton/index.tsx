import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'src/styles/tailwind';
import { IMAGE } from 'src/images';

export default function ComponentBackButton() {
    return (
        <View style={tw`w-full flex flex-row`}>
            <View style={tw`w-8 rounded-full`}>
                <Image
                    source={IMAGE.LEFTARROW}
                    style={tw`object-contain w-8 h-4`}
                />
            </View>
            <Text style={tw`w-32 ml-1.5`}>Back</Text>
        </View>
    );
}
