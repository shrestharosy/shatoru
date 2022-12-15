import { Card, Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import Loader from 'src/components/loader';
import ScheduleListRow from 'src/components/Shuttle/ScheduleListRow';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IScheduleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IScheduleListProps extends IRouteProps {
    scheduleIdList: Array<string>;
}

const ScheduleList = (props: IScheduleListProps) => {
    const [schedules, setSchedules] = useState<Array<IScheduleResponse>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { navigation } = props;

    useEffect(() => {
        const scheduleIds = props.route.params.scheduleIds;
        if (scheduleIds) {
            const parsedScheduleIds = JSON.parse(scheduleIds);
            request(parsedScheduleIds);
        }
    }, []);

    const request = async (scheduleIds: Array<string>) => {
        try {
            await fetchSchedules(scheduleIds);
        } catch (error) {
            alert('Please try again later');
        }
    };

    const onDelete = async (id: string) => {};

    const fetchSchedules = async (scheduleIds: Array<string>) => {
        try {
            let schedulesList: Array<IScheduleResponse> = [];

            await Promise.all(
                scheduleIds.map(async (scheduleId) => {
                    const schedule = await fetchSchedule(scheduleId);
                    schedulesList.push(schedule);
                    return schedule;
                })
            );

            setSchedules(schedulesList);
        } catch (error) {
            // alert('Error while fetching schedule');
            console.log(error);
            throw error;
        }
    };

    const fetchSchedule = async (id: string) => {
        try {
            const response = await shuttleService.fetchSchedule(id);
            return response;
        } catch (error) {
            console.log(error);
            // alert('Error while fetching schedule');
        }
    };

    return (
        <>
            <SafeAreaView>
                <Card>
                    {/* <Card.Title style={tw`m-0 mb-2`}>
                        <Pressable
                            style={tw`bg-main p-2 rounded-md`}
                            onPress={() => navigation.navigate('CreateShuttle')}
                        >
                            <Text style={tw`text-white`}>+ Create</Text>
                        </Pressable>
                    </Card.Title>
                    <Card.Divider /> */}
                    {isLoading && <Loader />}
                    {!isLoading &&
                        schedules.length > 0 &&
                        schedules.map((schedule, index) => (
                            <ScheduleListRow
                                key={schedule.id}
                                index={index + 1}
                                schedule={schedule}
                                onDelete={onDelete}
                            />
                        ))}
                    {!isLoading && schedules.length === 0 && (
                        <View>
                            <Text>No schedule found</Text>
                        </View>
                    )}
                </Card>
            </SafeAreaView>
        </>
    );
};

export default ScheduleList;
