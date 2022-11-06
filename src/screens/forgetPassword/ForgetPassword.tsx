import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { object as YupObject, string as YupString } from 'yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LogoTemplate from 'src/components/LogoTemplate';
import { CustomInput } from 'src/components/form/CustomTextInput';
import tw from 'src/styles/tailwind';
import { IMAGE } from 'src/images';

export const ForgetPassword: FC = () => {
    const { ...methods } = useForm<{ email: string }>({
        resolver: yupResolver(
            YupObject().shape({
                email: YupString().email('Invalid email'),
            })
        ),
    });

    return (
        <View>
            <LogoTemplate image={IMAGE.SHUTTLE} />
            <View>
                <Image style={tw`mx-auto`} source={IMAGE.QUESTION} />
                <Text style={tw`text-center text-4xl`}>Forgot Password</Text>
                <Text style={tw`text-lg mt-4`}>
                    Please provide the email address associated with this
                    account and we'll send you an email with instructions.
                </Text>
                <View style={tw`mt-12`}>
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
                            style={tw`w-full rounded-md bg-lightYellow py-3`}
                        >
                            <Text style={tw`text-center text-lg`}>Send</Text>
                        </TouchableOpacity>
                    </FormProvider>
                </View>
            </View>
        </View>
    );
};
