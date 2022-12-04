import DateTimePicker, {
    DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Button, Text, View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { Label } from 'src/components/form/Label';
import { isIOS } from 'src/libs/util/platform';
import tw from 'src/styles/tailwind';

const PrimaryDetails = () => {
    const formContext = useFormContext();

    const [date, setDate] = useState<Date>(new Date());

    const openDatePickHandler = () => {
        DateTimePickerAndroid.open({
            mode: 'time',
            value: date,
            onChange: (event, newDate) => {
                if (newDate) {
                    DateTimePickerAndroid.open({
                        mode: 'time',
                        value: newDate,
                        onChange: (_, newDateTime) => {
                            if (newDateTime) {
                                setDate(newDateTime);
                            }
                        },
                    });
                }
            },
        });
    };

    const { control, setValue } = formContext;

    const parseTime = (timestamp: Date) => {
        const hour = new Date(timestamp).getHours();
        const minute = new Date(timestamp).getMinutes();
        return `${hour} : ${minute}`;
    };

    return (
        <>
            <View>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <CustomInput
                            {...field}
                            label="Shuttle Name"
                            placeholder="blue shuttle"
                        />
                    )}
                />
                <View style={tw`flex flex-row justify-between p-2`}>
                    <View>
                        <Controller
                            name="startTime"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <Label label="Start Time" />
                                    <Text>{parseTime(date)}</Text>
                                    <Button
                                        title={'Change'}
                                        onPress={() => openDatePickHandler()}
                                    />
                                    {isIOS() && (
                                        <DateTimePicker
                                            value={field.value ?? new Date()}
                                            mode={'time'}
                                            onChange={(e) => {
                                                setValue(
                                                    'startTime',
                                                    new Date(
                                                        e.nativeEvent.timestamp
                                                    )
                                                );
                                            }}
                                            style={{
                                                width: 86,
                                            }}
                                        />
                                    )}
                                </>
                            )}
                        />
                    </View>
                    <View>
                        <Controller
                            name="endTime"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <Label label="End Time" />
                                    <Text>{parseTime(date)}</Text>
                                    <Button
                                        title="Change"
                                        onPress={() => openDatePickHandler()}
                                    />
                                    {isIOS() && (
                                        <DateTimePicker
                                            value={field.value ?? new Date()}
                                            mode={'time'}
                                            onChange={(e) => {
                                                setValue(
                                                    'endTime',
                                                    new Date(
                                                        e.nativeEvent.timestamp
                                                    )
                                                );
                                            }}
                                            style={{
                                                width: 100,
                                            }}
                                        />
                                    )}
                                </>
                            )}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default PrimaryDetails;
