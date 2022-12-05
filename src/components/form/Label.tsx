import React from 'react';

import {
    StyleSheet,
    Text,
    TextInputProps as RNTextInputProps,
} from 'react-native';

interface ILabelProps extends RNTextInputProps {
    label: string;
}

export const Label = ({ label }: ILabelProps) => {
    return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
    label: {
        color: 'black',
        marginBottom: 10,
        marginLeft: 0,
    },
});
