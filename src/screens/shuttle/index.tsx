import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import ShuttleRow from 'src/components/Shuttle/ShuttleRow';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IShuttleProps extends IRouteProps {
    location: string;
}

function Shuttle(props: IShuttleProps) {
    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [shuttles, setShuttles] = useState<Array<IShuttleResponse>>([]);

    useEffect(() => {
        getShuttles();
    }, []);

    const getShuttles = async () => {
        try {
            setIsLoading(true);
            const response = await shuttleService.fetchShuttles();
            setShuttles(response);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onDelete = async (id: number) => {
        try {
            setIsLoading(true);
            await shuttleService.deleteShuttle(id);
            await getShuttles();
        } catch (error) {
            console.log(error.message);
            alert('Error while deleting shuttle');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <Card>
                <Card.Title style={tw`m-0 mb-2`}>
                    <Pressable
                        style={tw`bg-main p-2 rounded-md`}
                        onPress={() => navigation.navigate('CreateShuttle')}
                    >
                        <Text style={tw`text-white`}>+ Create</Text>
                    </Pressable>
                </Card.Title>
                <Card.Divider />
                {isLoading && <Text>Loading...</Text>}
                {!isLoading &&
                    shuttles.length > 0 &&
                    shuttles.map((shuttle) => (
                        <ShuttleRow
                            key={shuttle.id}
                            shuttle={shuttle}
                            onDelete={onDelete}
                        />
                    ))}
                {!isLoading && shuttles.length === 0 && (
                    <View>
                        <Text>No shuttle found</Text>
                    </View>
                )}
            </Card>
        </SafeAreaView>
    );
}

export default withProtectedScreen(Shuttle);
