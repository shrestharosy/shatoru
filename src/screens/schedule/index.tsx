import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import ComponentBackButton from 'src/components/component-backButton';
import ComponentWrapper from 'src/components/component-wrapper';
import tw from 'src/styles/tailwind';

interface IScheduleListProps {
    time: any;
    location: string;
}

export default function Schedule() {
    const [scheduleList, setScheduleList] = useState<IScheduleListProps[]>([
        { time: '12:00 AM', location: 'Fairlane Woods' },
        { time: '12:00 AM', location: 'Fairlane Woods' },
        { time: '12:00 AM', location: 'Fairlane Woods' },
        { time: '12:00 AM', location: 'Fairlane Woods' },
    ]);
    return (
        <ComponentWrapper>
            <View>
                <ComponentBackButton />
                <View style={tw`mt-8`}>
                    <Text style={tw`text-2xl text-slate-400`}>
                        Select a schedule.
                    </Text>
                    <View style={tw`flex flex-row mt-2`}>
                        <Pressable style={tw`w-36 bg-main p-4 rounded-md`}>
                            <Text style={tw`text-xl`}>Blue Shuttle</Text>
                        </Pressable>
                        <Pressable style={tw`w-36 bg-main p-4 rounded-md ml-4`}>
                            <Text style={tw`text-xl`}>Maize Shuttle</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={tw`mt-6`}>
                    <Text style={tw`text-2xl mb-4`}>Details</Text>
                    {scheduleList?.map(
                        (item: IScheduleListProps, index: number) => (
                            <View style={tw`flex flex-row pb-2`}>
                                <Text
                                    style={tw`w-24 ${
                                        index === 0
                                            ? 'text-xl'
                                            : index > 3
                                            ? 'text-sm text-slate-500'
                                            : 'text-lg text-slate-400'
                                    }`}
                                >
                                    {item?.time}
                                </Text>
                                <Text
                                    style={tw`flex-1 ${
                                        index === 0
                                            ? 'text-xl'
                                            : index > 3
                                            ? 'text-sm text-slate-500'
                                            : 'text-lg text-slate-400'
                                    }`}
                                >
                                    {item?.location}
                                </Text>
                            </View>
                        )
                    )}
                </View>
            </View>
        </ComponentWrapper>
    );
}
