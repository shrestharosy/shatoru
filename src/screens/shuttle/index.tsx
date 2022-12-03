import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IStop } from 'src/services/shuttle/shuttle.type';
import MultiStepForm from './create/wizard';

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
        <SafeAreaView>
            <View>
                <MultiStepForm />
                {/* <Button
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
                <Text>No shuttle found</Text> */}
            </View>
        </SafeAreaView>
    );
}
