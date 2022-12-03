import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from 'src/styles/tailwind';
import { IMAGE } from 'src/images';

export default function ComponentBackButton() {
    return (
        <View style={tw`w-full flex flex-row bg-slate-300 p-2`}>
            <View style={tw``}>
                <Image source={IMAGE.HAMBURGER} style={tw`w-6 h-4`} />
            </View>
            {/* <Text style={tw`w-32 ml-1.5`}>Back</Text> */}
        </View>
    );
}
