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

interface ICustomInputProps extends RNTextInputProps, UseControllerProps {
    label: string;
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
            {label && <Text style={styles.label}>{label}</Text>}
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
    label: {
        color: 'black',
        marginBottom: 10,
        marginLeft: 0,
    },
    container: {
        flex: -1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        height: 50,
        padding: 10,
        borderRadius: 4,
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
