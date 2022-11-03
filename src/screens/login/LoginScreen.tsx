import { useContext, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    Pressable,
} from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    useForm,
    FormProvider,
    SubmitHandler,
    SubmitErrorHandler,
    Controller,
} from 'react-hook-form';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { color } from 'src/styles/color';
import loginSchema from 'src/libs/validation-schema/login_schema';
import { AuthContext } from 'src/context/auth_context';

interface ILoginFormValues {
    email: string;
    password: string;
}

export default function App() {
    const tailwind = useTailwind();
    const { login } = useContext(AuthContext);

    const { ...methods } = useForm<ILoginFormValues>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<ILoginFormValues> = (data) => {
        console.log({ data });
        login();
    };

    const onError: SubmitErrorHandler<ILoginFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View>
            <View style={tailwind('py-16 px-8 bg-lightGray rounded-xl w-full')}>
                <Image
                    source={require('../login/loginpage_logo.png')}
                    style={tailwind('h-32 w-full')}
                />
                <Text
                    style={tailwind(
                        'text-brownRed text-base text-center mt-2 font-bold'
                    )}
                >
                    UMD Shuttle Service
                </Text>
            </View>
            <View style={tailwind('mt-4')}>
                <Text style={tailwind('font-bold text-2xl')}>Welcome!</Text>
                <Text>Sign in to your account</Text>
                <View style={tailwind('mt-12')}>
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
                        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                            <Text style={tailwind('mb-4 text-lightYellow')}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>
                    <Pressable
                        onPress={methods.handleSubmit(onSubmit, onError)}
                        style={tailwind('bg-main p-2 rounded-md')}
                    >
                        <Text
                            style={tailwind(
                                'text-center text-lg tracking-wide'
                            )}
                        >
                            LOG IN
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
