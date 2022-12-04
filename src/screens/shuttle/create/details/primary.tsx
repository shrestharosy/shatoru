import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { Label } from 'src/components/form/Label';
import tw from 'src/styles/tailwind';

const PrimaryDetails = () => {
    const formContext = useFormContext();

    const { control, setValue } = formContext;

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
                                    <DateTimePicker
                                        value={field.value ?? new Date()}
                                        mode={'time'}
                                        onChange={(e) => {
                                            // console.log(
                                            //     new Date(
                                            //         e.nativeEvent.timestamp
                                            //     ).getHours(),
                                            //     new Date(
                                            //         e.nativeEvent.timestamp
                                            //     ).getMinutes()
                                            // );
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
