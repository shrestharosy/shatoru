import React, { useEffect, useState } from 'react';
import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { shuttleService } from 'src/services/shuttle';
import { IOption } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

const ScheduleDetails = () => {
    const [selected, setSelected] = React.useState([]);
    const [stopsList, setStopsList] = useState<Array<IOption>>([]);

    const formContext = useFormContext();
    const { control, register, getValues, setValue } = formContext;
    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: 'stop',
    });

    useEffect(() => {
        const selectedStops = getValues('stops');
        setSelected(selectedStops);
        selectedStops.map((selectedStop, index) =>
            setValue(`stop[${index}].name`, selectedStop)
        );
    }, [getValues('stops')]);

    useEffect(() => {
        const getStops = async () => {
            try {
                const response = await shuttleService.fetchStops();
                setStopsList(
                    response.map((stop) => ({
                        label: stop.name,
                        value: stop.id,
                    }))
                );
            } catch (error) {
                console.log(error);
                alert('Error while fetching stops');
            }
        };

        getStops();
    }, []);

    const getStopName = (index: number) => {
        if (!stopsList) {
            return '';
        } else {
            {
                return stopsList.find(
                    (stop) => stop.value === getValues(`stops[${index}]`)
                )?.label;
            }
        }
    };

    return (
        <View>
            <Text style={tw`mb-2 ml-1`}>Select stops</Text>
            <Controller
                name="stops"
                control={control}
                render={({ field }) => (
                    <MultiSelect
                        {...field}
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={stopsList}
                        labelField="label"
                        valueField="value"
                        placeholder={`${selected.length} stops selected`}
                        value={selected}
                        search
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setSelected(item);
                            setValue('stops', item);
                            append({ name: getStopName(item) });
                        }}
                        // renderItem={renderDataItem}
                        renderSelectedItem={(item, unSelect) => (
                            <></>
                            // <TouchableOpacity
                            //     onPress={() => unSelect && unSelect(item)}
                            // >
                            //     <Text style={styles.textSelectedStyle}>
                            //         {item.label}
                            //     </Text>
                            // </TouchableOpacity>
                        )}
                    />
                )}
            />

            <View style={tw`mt-4 p-4 ${selected.length > 0 && `bg-white`}`}>
                {fields.map((item, index) => {
                    return (
                        <View style={tw`flex flex-row justify-between`}>
                            <View
                                key={item.id}
                                style={tw`text-center justify-center items-center`}
                            >
                                <Controller
                                    name={`stop[${index}].name`}
                                    defaultValue={getValues(
                                        `stop[${index}].name`
                                    )}
                                    control={control}
                                    render={() => (
                                        <View
                                        // style={tw`flex-row justify-center items-center rounded-2xl bg-white shadow-sm mt-2 mr-2 px-2 py-2`}
                                        >
                                            <Text
                                                style={styles.textSelectedStyle}
                                            >
                                                {getStopName(index)}
                                            </Text>
                                        </View>
                                    )}
                                />
                            </View>
                            <View
                                style={tw`flex flex-row justify-between text-center justify-center items-center`}
                            >
                                <View>
                                    <Controller
                                        name={`stop[${index}].interval`}
                                        defaultValue={item['interval']}
                                        control={control}
                                        render={({ field }) => (
                                            <TextInput
                                                {...field}
                                                style={tw`p-5 text-black`}
                                                placeholder="Interval"
                                                keyboardType={'numeric'}
                                                value={field.value}
                                                onChangeText={field.onChange}
                                            />
                                        )}
                                    />
                                </View>
                                <View>
                                    <Pressable
                                        style={tw`p-4`}
                                        onPress={() => {
                                            setSelected(
                                                selected.filter(
                                                    (item) =>
                                                        item !==
                                                        getValues(
                                                            `stop[${index}].name`
                                                        )
                                                )
                                            );
                                            remove(index);
                                        }}
                                    >
                                        <Text>X</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
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
        fontSize: 16,
    },
});

export default ScheduleDetails;
