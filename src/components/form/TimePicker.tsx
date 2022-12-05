import DateTimePicker, {
    DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import React from 'react';
import {
    useController,
    UseControllerProps,
    useFormContext,
} from 'react-hook-form';
import { Button, Text, View } from 'react-native';
import { Label } from 'src/components/form/Label';
import { parseTime } from 'src/libs/util/datetime';
import { isAndroid, isIOS } from 'src/libs/util/platform';
import tw from 'src/styles/tailwind';

interface ITimePickerProps extends UseControllerProps {
    name: string;
    label: string;
    defaultValue?: string;
}

const TimePicker = (props: ITimePickerProps) => {
    const formContext = useFormContext();

    const { getValues, setValue } = formContext;

    const { name, label, rules, defaultValue, ...inputProps } = props;

    const { field } = useController({ name, rules, defaultValue });

    const openDatePickHandler = (fieldName: string) => {
        DateTimePickerAndroid.open({
            mode: 'time',
            value: new Date(getValues(fieldName)) ?? new Date(),
            onChange: (event) => {
                if (event.nativeEvent.timestamp) {
                    setValue(fieldName, new Date(event.nativeEvent.timestamp));
                }
            },
        });
    };

    return (
        <>
            <Label label={label} />
            {isAndroid() && (
                <>
                    <Text>{parseTime(field.value)}</Text>
                    <View style={tw`mt-2 mr-3`}>
                        <Button
                            title={'Change'}
                            onPress={() => openDatePickHandler(field.name)}
                        />
                    </View>
                </>
            )}
            {isIOS() && (
                <DateTimePicker
                    value={field.value ?? new Date()}
                    mode={'time'}
                    onChange={(e) => {
                        setValue(field.name, new Date(e.nativeEvent.timestamp));
                    }}
                    style={{
                        width: 86,
                    }}
                />
            )}
        </>
    );
};

export default TimePicker;
