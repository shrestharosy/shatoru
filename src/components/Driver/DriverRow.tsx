import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { Pressable } from 'react-native';
import { IDriverResponse } from 'src/services/driver/driver.type';

interface IDriverRowProps {
    driver: IDriverResponse;
    onClick: () => void;
    onDelete: (id: number) => Promise<void>;
}

const DriverRow = (props: IDriverRowProps) => {
    const { driver, onClick, onDelete } = props;
    return (
        <>
            <ListItem.Swipeable
                rightContent={(reset) => (
                    <Button
                        title=""
                        onPress={() => {
                            onDelete(driver.id);
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
                    <Pressable onPress={() => onClick()}>
                        <Text>
                            {driver.first_name} {driver.last_name}
                        </Text>
                        <Text>{driver.email}</Text>
                    </Pressable>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </>
    );
};

export default DriverRow;
