import React from 'react';
import { View, Text } from 'react-native';
import ComponentWrapper from 'src/components/component-wrapper';
import ComponentLoggedInHeader from 'src/components/component-loggedInHeader';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { CustomInput } from 'src/components/form/CustomTextInput';
import tw from 'src/styles/tailwind';
export default function GenerateSchedule() {
    const { ...methods } = useForm<any>({});
    return (
        <ComponentWrapper>
            <View>
                <ComponentLoggedInHeader />
                <View style={tw`pt-4`}>
                    <FormProvider {...methods}>
                        <Controller
                            name="startTime"
                            control={methods.control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    label="startTime"
                                    placeholder="10:15"
                                />
                            )}
                        />
                        <Controller
                            name="endTime"
                            control={methods.control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    label="endTime"
                                    placeholder="10:15"
                                />
                            )}
                        />
                        <Controller
                            name="endTime"
                            control={methods.control}
                            render={({ field }) => (
                                <select>
                                    <option>
                                        <Text>FW</Text>
                                    </option>
                                </select>
                            )}
                        />
                    </FormProvider>
                </View>
            </View>
        </ComponentWrapper>
    );
}
