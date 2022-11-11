import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { object as YupObject, string as YupString } from 'yup';
import {
    Controller,
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CustomInput } from 'src/components/form/CustomTextInput';
import tw from 'src/styles/tailwind';
import { IMAGE } from 'src/images';
import { userService } from 'src/services/user';

interface IForgotPasswordFormValues {
    email: string;
}

export default function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false);

    const { ...methods } = useForm<{ email: string }>({
        resolver: yupResolver(
            YupObject().shape({
                email: YupString()
                    .email('Invalid email')
                    .required('Email is required'),
            })
        ),
    });

    const onSubmit: SubmitHandler<IForgotPasswordFormValues> = async (data) => {
        try {
            setIsLoading(true);
            await userService.sendCode(data.email);
            alert('Please check your email for a 6-digit code');
        } catch (error: any) {
            console.log(error);
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onError: SubmitErrorHandler<IForgotPasswordFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-2`}>
            <View style={tw`pt-2`}>
                <Image style={tw`mx-auto`} source={IMAGE.QUESTION} />
                <Text style={tw`text-center text-4xl`}>Forgot Password</Text>

                <View style={tw`mt-10`}>
                    <FormProvider {...methods}>
                        <Controller
                            name="email"
                            control={methods.control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    placeholder="shatoru@email.com"
                                    keyboardType="email-address"
                                />
                            )}
                        />
                        <TouchableOpacity
                            style={tw`w-full rounded-md bg-lightYellow py-3`}
                            onPress={methods.handleSubmit(onSubmit, onError)}
                            disabled={isLoading}
                        >
                            <Text style={tw`text-center text-lg`}>
                                {isLoading ? 'Loading...' : 'Send Code'}
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>
                </View>
            </View>
        </View>
    );
}
