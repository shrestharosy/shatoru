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
import createStopSchema from 'src/libs/validation-schema/create_stop_schema';
import { driverService } from 'src/services/driver';
import { shuttleService } from 'src/services/shuttle';

import tw from 'src/styles/tailwind';

interface ICreateStopProps extends IRouteProps {}

interface ICreateStopFormValues {
    stopName: string;
    stopAbbreviation: string;
}

const CreateStop = ({ navigation }: ICreateStopProps) => {
    const { ...methods } = useForm<ICreateStopFormValues>({
        resolver: yupResolver(createStopSchema),
    });

    const onSubmit: SubmitHandler<ICreateStopFormValues> = async (data) => {
        try {
            await shuttleService.createStop(
                data.stopName,
                data.stopAbbreviation
            );
            alert('Stop created');
            navigation.navigate('StopList');
        } catch (error: any) {
            alert(error.message ?? 'Please try again');
        }
    };

    const onError: SubmitErrorHandler<ICreateStopFormValues> = (errors) => {
        // return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-4`}>
            <>
                <FormProvider {...methods}>
                    <Controller
                        name="stopName"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Stop Name"
                                placeholder="Fairlane Woods"
                            />
                        )}
                    />
                    <Controller
                        name="stopAbbreviation"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Abbreviation"
                                placeholder="FW"
                            />
                        )}
                    />
                </FormProvider>
            </>
            <Pressable
                style={tw`bg-main p-2 rounded-md`}
                onPress={methods.handleSubmit(onSubmit, onError)}
            >
                <Text style={tw`text-center text-lg tracking-wide`}>
                    CREATE
                </Text>
            </Pressable>
        </View>
    );
};

export default withProtectedScreen(CreateStop);
