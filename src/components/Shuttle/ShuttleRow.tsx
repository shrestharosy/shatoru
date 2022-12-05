import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { View, Pressable } from 'react-native';
import { IRouteProps } from 'src/libs/routes';
import { parseTime } from 'src/libs/util/datetime';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import { useNavigation } from '@react-navigation/native';

interface IShuttleRowProps {
    shuttle: IShuttleResponse;
    onDelete: (id: number) => Promise<void>;
}

const ShuttleRow = (props: IShuttleRowProps) => {
    const { shuttle, onDelete } = props;

    const navigation = useNavigation<any>();

    return (
        <>
            <ListItem.Swipeable
                rightContent={(reset) => (
                    <Button
                        title=""
                        onPress={() => {
                            onDelete(shuttle.id);
                            reset();
                        }}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{
                            minHeight: '100%',
                            backgroundColor: '#F04135',
                        }}
                    />
                )}
            >
                <Pressable
                    onPress={() =>
                        navigation.navigate('ScheduleList', {
                            shuttleId: shuttle.id,
                            scheduleIds: JSON.stringify(shuttle.schedules),
                        })
                    }
                >
                    <ListItem.Content>
                        <Text>{shuttle.name}</Text>
                    </ListItem.Content>
                </Pressable>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </>
    );
};

export default ShuttleRow;
