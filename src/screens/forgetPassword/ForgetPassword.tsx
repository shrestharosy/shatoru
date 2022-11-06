import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { object as YupObject, string as YupString } from 'yup';
import { useTailwind } from 'tailwind-rn/dist';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LogoTemplate from 'src/components/LogoTemplate';
import { CustomInput } from 'src/components/form/CustomTextInput';

export const ForgetPassword: FC = () => {
    const { ...methods } = useForm<{ email: string }>({
        resolver: yupResolver(
            YupObject().shape({
                email: YupString().email('Invalid email'),
            })
        ),
    });

    const tailwind = useTailwind();
    return (
        <View>
            <LogoTemplate image="../login/loginpage_logo.png" />
            <View>
                <Image
                    style={tailwind('mx-auto')}
                    source={require('../forgetPassword/question.png')}
                />
                <Text style={tailwind('text-center text-4xl')}>
                    Forgot Password
                </Text>
                <Text style={tailwind('text-lg mt-4')}>
                    Please provide the email address associated with this
                    account and we'll send you an email with instructions.
                </Text>
                <View style={tailwind('mt-12')}>
                    <FormProvider {...methods}>
                        <Controller
                            name="email"
                            control={methods.control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    placeholder="xyz@xyz.com"
                                    keyboardType="email-address"
                                />
                            )}
                        />
                        <TouchableOpacity
                            style={tailwind(
                                'w-full rounded-md bg-lightYellow py-3'
                            )}
                        >
                            <Text style={tailwind('text-center text-lg')}>
                                Send
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>
                </View>
            </View>
        </View>
    );
};
