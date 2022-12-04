import React from 'react';
import {
    useController,
    UseControllerProps,
    useFormContext,
} from 'react-hook-form';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import { IOption } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface ICustomMultiSelectProps extends UseControllerProps {
    name: string;
    options: Array<IOption>;
    selectedOptions: Array<string>;
    onChange: (item: any) => void;
    showSelectedOptionsAsTags?: boolean;
}

const CustomMultiSelect = (props: ICustomMultiSelectProps) => {
    const {
        name,
        options,
        selectedOptions,
        showSelectedOptionsAsTags = false,
        onChange,
    } = props;

    const formContext = useFormContext();
    const { control, register, getValues, setValue } = formContext;

    const { field } = useController({ name });

    return (
        <MultiSelect
            {...field}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={options}
            labelField="label"
            valueField="value"
            placeholder={`${selectedOptions.length} options selected`}
            value={selectedOptions}
            search
            searchPlaceholder="Search..."
            onChange={onChange}
            // renderItem={renderDataItem}
            renderSelectedItem={(item, unSelect) => {
                if (!showSelectedOptionsAsTags) {
                    return <></>;
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => unSelect && unSelect(item)}
                            style={tw`flex-row justify-center items-center rounded-2xl bg-white shadow-sm mt-2 mr-2 px-2 py-1`}
                        >
                            <Text style={styles.textSelectedStyle}>
                                {item.label} x
                            </Text>
                        </TouchableOpacity>
                    );
                }
            }}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 12,
    },
});

export default CustomMultiSelect;
