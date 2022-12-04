import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';
import TimePicker from 'src/components/form/TimePicker';
import tw from 'src/styles/tailwind';

const PrimaryDetails = () => {
    const formContext = useFormContext();

    const { control } = formContext;

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
                                    <TimePicker
                                        name={field.name}
                                        label={'Start Time'}
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
                                    <TimePicker
                                        name={field.name}
                                        label={'End Time'}
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
