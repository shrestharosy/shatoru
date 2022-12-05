import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { IStop } from 'src/services/shuttle/shuttle.type';

interface IStopRowProps {
    stop: IStop;
    onDelete: (id: string) => Promise<void>;
}

const StopRow = (props: IStopRowProps) => {
    const { stop, onDelete } = props;
    console.log(stop);
    return (
        <>
            <ListItem.Swipeable
                rightContent={(reset) => (
                    <Button
                        title=""
                        onPress={() => {
                            onDelete(stop.id);
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
                    <Text>{stop.name}</Text>
                    <Text>{stop.abbr}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </>
    );
};

export default StopRow;
