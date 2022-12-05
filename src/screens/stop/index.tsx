import { Card } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StopRow from 'src/components/Shuttle/StopRow';
import { AuthContext } from 'src/context/auth_context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IStop } from 'src/services/shuttle/shuttle.type';
import { RoleEnum } from 'src/services/user/user.type';
import tw from 'src/styles/tailwind';

interface IStopProps extends IRouteProps {}

const StopList = ({ navigation }: IStopProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const [stopsList, setStopsList] = useState<Array<IStop>>([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        getStops();
    }, []);

    const getStops = async () => {
        try {
            const response = await shuttleService.fetchStops();
            setStopsList(response);
        } catch (error) {
            console.log(error);
            alert('Error while fetching stops');
        }
    };
    const onDelete = async (id: string) => {
        try {
            setIsLoading(true);
            await shuttleService.deleteStop(id);
            await getStops();
        } catch (error) {
            console.log(error.message);
            alert('Error while deleting stop');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <Card>
                {user && user.role === RoleEnum.ADMIN && (
                    <>
                        <Card.Title style={tw`m-0 mb-2`}>
                            <Pressable
                                style={tw`bg-main p-2 rounded-md`}
                                onPress={() =>
                                    navigation.navigate('CreateStop')
                                }
                            >
                                <Text style={tw`text-white`}>+ Add Stop</Text>
                            </Pressable>
                        </Card.Title>
                        <Card.Divider />
                    </>
                )}
                {isLoading && <Text>Loading...</Text>}
                {!isLoading &&
                    stopsList.length > 0 &&
                    stopsList.map((stop) => (
                        <StopRow
                            key={stop.id}
                            stop={stop}
                            role={user?.role ?? null}
                            onDelete={onDelete}
                        />
                    ))}
                {!isLoading && stopsList.length === 0 && (
                    <View>
                        <Text>No stops found</Text>
                    </View>
                )}
            </Card>
        </SafeAreaView>
    );
};

export default withProtectedScreen(StopList);

const styles = StyleSheet.create({});
