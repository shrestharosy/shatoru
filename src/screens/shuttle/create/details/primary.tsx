import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import CustomMultiSelect from 'src/components/form/CustomMultiSelect';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { Label } from 'src/components/form/Label';
import TimePicker from 'src/components/form/TimePicker';
import { DAYS_OPTIONS } from 'src/libs/constants/day';
import tw from 'src/styles/tailwind';

const PrimaryDetails = () => {
    const [selectedOptions, setSelectedOptions] = React.useState<Array<string>>(
        []
    );
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
                <View>
                    <Label label={'Select Days'} />
                    <Controller
                        name="days"
                        control={control}
                        render={({ field }) => (
                            <CustomMultiSelect
                                name="days"
                                showSelectedOptionsAsTags={true}
                                options={DAYS_OPTIONS}
                                selectedOptions={selectedOptions}
                                onChange={(item) => {
                                    setSelectedOptions(item);
                                    setValue('days', item);
                                }}
                            />
                        )}
                    />
                </View>
                <View style={tw`flex flex-row justify-between p-2 mt-3`}>
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
