import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { parseTime } from 'src/libs/util/datetime';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';

interface IShuttleRowProps {
    shuttle: IShuttleResponse;
    onDelete: (id: number) => Promise<void>;
}

const ShuttleRow = (props: IShuttleRowProps) => {
    const { shuttle, onDelete } = props;
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
                <ListItem.Content>
                    <Text>{shuttle.shuttle}</Text>
                    <Text>
                        {parseTime(shuttle.start_time)} -{' '}
                        {parseTime(shuttle.end_time)}
                    </Text>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </>
    );
};

export default ShuttleRow;
