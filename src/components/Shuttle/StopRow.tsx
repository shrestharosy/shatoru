import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { IStop } from 'src/services/shuttle/shuttle.type';
import { RoleEnum } from 'src/services/user/user.type';

interface IStopRowProps {
    stop: IStop;
    role: RoleEnum | null;
    onDelete: (id: string) => Promise<void>;
}

const StopRow = (props: IStopRowProps) => {
    const { stop, role, onDelete } = props;

    return (
        <>
            <ListItem.Swipeable
                rightContent={(reset) => {
                    if (role === RoleEnum.ADMIN) {
                        return (
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
                        );
                    }
                }}
            >
                <ListItem.Content>
                    <Text>{stop.name}</Text>
                    <Text>{stop.abbr}</Text>
                </ListItem.Content>
                {role === RoleEnum.ADMIN && <ListItem.Chevron />}
            </ListItem.Swipeable>
        </>
    );
};

export default StopRow;
