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
import { driverService } from 'src/services/driver';

import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

interface ICreateDriverFormValues {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}

const CreateDriver = ({ navigation }: IDriver) => {
    const { ...methods } = useForm<ICreateDriverFormValues>({
        resolver: yupResolver(createDriverSchema),
    });

    const onSubmit: SubmitHandler<ICreateDriverFormValues> = async (data) => {
        try {
            await driverService.createDriver(data);
            alert('Driver created successfully');
        } catch (error: any) {
            alert(error.message);
        }
    };

    const onError: SubmitErrorHandler<ICreateDriverFormValues> = (errors) => {
        // return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-4`}>
            <>
                <FormProvider {...methods}>
                    <Controller
                        name="firstName"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="First Name"
                                placeholder="John"
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Last Name"
                                placeholder="Doe"
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Email"
                                placeholder="shatoru@email.com"
                                keyboardType="email-address"
                            />
                        )}
                    />
                    <Controller
                        name="username"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Username"
                                placeholder="johndoe01"
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

export default withProtectedScreen(CreateDriver);
