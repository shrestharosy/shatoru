import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import {
    Controller,
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import createDriverSchema from 'src/libs/validation-schema/create_driver_schema';

import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

interface ICreateScheduleFormValues {
    shuttleName: string;
}

const CreateSchedule = ({ navigation }: IDriver) => {
    const { ...methods } = useForm<ICreateScheduleFormValues>({
        resolver: yupResolver(createDriverSchema),
    });

    const onSubmit: SubmitHandler<ICreateScheduleFormValues> = async (data) => {
        try {
            alert('Work In Progress');
        } catch (error) {
            alert(error.message);
        }
    };

    const onError: SubmitErrorHandler<ICreateScheduleFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-4`}>
            <>
                <FormProvider {...methods}>
                    <Controller
                        name="shuttleName"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Shuttle Name"
                                placeholder="Blue Shuttle"
                            />
                        )}
                    />
                </FormProvider>
            </>
            <Pressable
                style={tw`bg-main p-2 rounded-md`}
                onPress={methods.handleSubmit(onSubmit, onError)}
            >
                <Text style={tw`text-center text-lg tracking-wide`}>NEXT</Text>
            </Pressable>
        </View>
    );
};

export default withProtectedScreen(CreateSchedule);
