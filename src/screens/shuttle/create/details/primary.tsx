import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';

const PrimaryDetails = ({ methods }) => {
    return (
        <View>
            <Controller
                name="name"
                control={methods.control}
                render={({ field }) => (
                    <CustomInput
                        {...field}
                        label="Shuttle Name"
                        placeholder="blue shuttle"
                    />
                )}
            />
        </View>
    );
};

export default PrimaryDetails;
