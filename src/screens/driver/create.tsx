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

import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

interface ICreateDriverFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
}

const CreateDriver = ({ navigation }: IDriver) => {
    const { ...methods } = useForm<ICreateDriverFormValues>({});

    const onSubmit: SubmitHandler<ICreateDriverFormValues> = (data) => {
        console.log({ data });
    };

    const onError: SubmitErrorHandler<ICreateDriverFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-4`}>
            <>
                <FormProvider {...methods}>
                    <Controller
                        name="fullName"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Full Name"
                                placeholder="John Doe"
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
                        name="password"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                secureTextEntry
                                label="Password"
                                placeholder="******"
                            />
                        )}
                    />
                    <Controller
                        name="phoneNumber"
                        control={methods.control}
                        render={({ field }) => (
                            <CustomInput
                                {...field}
                                label="Phone Number"
                                placeholder={'(313)-111-0234'}
                                keyboardType={'number-pad'}
                            />
                        )}
                    />
                </FormProvider>
            </>
            <Pressable style={tw`bg-main p-2 rounded-md`}>
                <Text style={tw`text-center text-lg tracking-wide`}>
                    CREATE
                </Text>
            </Pressable>
        </View>
    );
};

export default withProtectedScreen(CreateDriver);
