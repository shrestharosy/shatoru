import { ListItem, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { parseTime } from 'src/libs/util/datetime';
import { IScheduleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IScheduleListRowProps {
    index: number;
    schedule: IScheduleResponse;
    onDelete: (id: string) => Promise<void>;
}

const ScheduleListRow = (props: IScheduleListRowProps) => {
    const { index, schedule, onDelete } = props;

    return (
        <ScrollView>
            {/* <ListItem.Swipeable
                rightContent={(reset) => (
                    <Button
                        title=""
                        onPress={() => {
                            onDelete(schedule.id);
                            reset();
                        }}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{
                            minHeight: '100%',
                            backgroundColor: '#F04135',
                        }}
                    />
                )}
            > */}
            <ListItem.Content>
                {/* <Text>Schedule {index}</Text> */}
                <View style={tw`flex-row justify-between`}>
                    {/* <Text>{schedule.days.map((day) => day)}</Text> */}
                    {schedule.days.map((day) => (
                        <>
                            <View
                                style={tw`flex-row justify-center items-center rounded-2xl bg-main shadow-sm mr-2 px-2 py-2`}
                            >
                                <Text style={tw`text-white`}>{day}</Text>
                            </View>
                        </>
                    ))}
                    {/* <Text style={tw`ml-12`}>
                            {parseTime(new Date(schedule.start_time))} -{' '}
                            {parseTime(new Date(schedule.end_time))}
                        </Text> */}
                </View>
                {schedule.schedule.map((s) => (
                    <View style={tw`flex-row justify-between p-2 mt-2`}>
                        <Text>{s.stop_abbr}</Text>
                        <Text style={tw`ml-5`}>
                            {parseTime(new Date(s.time))}
                        </Text>
                    </View>
                ))}
            </ListItem.Content>
            {/* <ListItem.Chevron /> */}
            {/* </ListItem.Swipeable> */}
        </ScrollView>
    );
};

export default ScheduleListRow;
