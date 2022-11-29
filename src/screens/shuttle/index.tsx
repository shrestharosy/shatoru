import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IStop } from 'src/services/shuttle/shuttle.type';

interface IShuttleProps extends IRouteProps {
    location: string;
}

export default function Shuttle(props: IShuttleProps) {
    const { navigation } = props;

    const [stops, setStops] = useState<Array<IStop>>([]);

    useEffect(() => {
        const getStops = async () => {
            try {
                const response = await shuttleService.fetchStops();
                setStops(response);
            } catch (error) {
                console.log(error);
                alert('Error while fetching stops');
            }
        };

        getStops();
    }, []);

    return (
        // <ComponentWrapper>
        //     <>
        //         <View style={tw`mt-8`}>
        //             <Text style={tw`text-2xl text-slate-400`}>
        //                 Select a schedule.
        //             </Text>
        //             <View style={tw`flex flex-row mt-2`}>
        //                 <Pressable style={tw`w-36 bg-main p-4 rounded-md`}>
        //                     <Text style={tw`text-xl`}>Blue Shuttle</Text>
        //                 </Pressable>
        //                 <Pressable style={tw`w-36 bg-main p-4 rounded-md ml-4`}>
        //                     <Text style={tw`text-xl`}>Maize Shuttle</Text>
        //                 </Pressable>
        //             </View>
        //         </View>
        //         <View style={tw`mt-6`}>
        //             <Text style={tw`text-2xl mb-4`}>Available stops</Text>
        //             {stops.map((stop) => (
        //                 <Text key={stop.id}>{stop.name}</Text>
        //             ))}
        //             {scheduleList?.map(
        //                 (item: IScheduleListProps, index: number) => (
        //                     <View style={tw`flex flex-row pb-2`} key={index}>
        //                         <Text
        //                             style={tw`w-24 ${
        //                                 index === 0
        //                                     ? 'text-xl'
        //                                     : index > 3
        //                                     ? 'text-sm text-slate-500'
        //                                     : 'text-lg text-slate-400'
        //                             }`}
        //                         >
        //                             {item?.time}
        //                         </Text>
        //                         <Text
        //                             style={tw`flex-1 ${
        //                                 index === 0
        //                                     ? 'text-xl'
        //                                     : index > 3
        //                                     ? 'text-sm text-slate-500'
        //                                     : 'text-lg text-slate-400'
        //                             }`}
        //                         >
        //                             {item?.location}
        //                         </Text>
        //                     </View>
        //                 )
        //             )}
        //         </View>
        //     </>
        // </ComponentWrapper>
        <SafeAreaView>
            <View>
                <Button
                    title="Create Shuttle"
                    onPress={() => navigation.navigate('CreateShuttle')}
                />
            </View>
            <View>
                <Text>Available Stops</Text>
                {stops.map((stop) => (
                    <Text key={stop.id}>{stop.name}</Text>
                ))}
                <Text>======================================</Text>
                <Text>No shuttle found</Text>
            </View>
        </SafeAreaView>
    );
}
