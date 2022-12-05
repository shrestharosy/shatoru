import React, { ReactNode } from 'react';

import {
    View,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    Text,
    StyleSheet,
} from 'react-native';

import {
    useController,
    useFormContext,
    UseControllerProps,
} from 'react-hook-form';
import { Label } from './Label';

interface ICustomInputProps extends RNTextInputProps, UseControllerProps {
    label?: string;
    name: string;
    defaultValue?: string;
}

export const CustomInput = (props: ICustomInputProps) => {
    const formContext = useFormContext();

    const { formState } = formContext;

    const { name, label, rules, defaultValue, ...inputProps } = props;

    const { field } = useController({ name, rules, defaultValue });

    const hasError = Boolean(formState?.errors[name]);

    return (
        <View style={styles.container}>
            {label && <Label label={label} />}
            <View>
                <RNTextInput
                    textAlign="left"
                    style={styles.input}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    {...inputProps}
                />

                <View style={styles.errorContainer}>
                    {hasError && (
                        <Text style={styles.error}>
                            {formState.errors[name]?.message as ReactNode}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: -1,
        justifyContent: 'center',
    },
    input: {
        // borderWidth: 1,
        height: 50,
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    errorContainer: {
        flex: -1,
        height: 25,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
});
