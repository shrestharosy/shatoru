import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';

const ScheduleDetails = ({ methods }) => {
    return (
        <View>
            <Controller
                name="shuttleSchedule"
                control={methods.control}
                render={({ field }) => (
                    <CustomInput
                        {...field}
                        label="Shuttle Schedule"
                        placeholder="Monday to Friday"
                    />
                )}
            />
        </View>
    );
};

export default ScheduleDetails;
