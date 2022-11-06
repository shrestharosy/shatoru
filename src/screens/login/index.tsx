import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import tw from 'src/styles/tailwind';

import {
    Controller,
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { AuthContext } from 'src/context/auth_context';
import loginSchema from 'src/libs/validation-schema/login_schema';
import { IRouteProps } from 'src/libs/routes';

interface ILoginFormValues {
    email: string;
    password: string;
}

interface ILoginProps extends IRouteProps {}

export default function Login(props: ILoginProps) {
    const {
        navigation: { navigate },
    } = props;

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
        <View style={tw`py-4 px-4`}>
            <View style={tw`py-16 px-8 bg-lightGray rounded-xl w-full`}>
                <Image
                    source={require('../login/loginpage_logo.png')}
                    style={tw`h-32 w-full`}
                />
                <Text
                    style={tw`text-brownRed text-base text-center mt-2 font-bold`}
                >
                    UMD Shuttle Service
                </Text>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-2xl`}>Welcome!</Text>
                <Text>Sign in to your account</Text>
                <View style={tw`mt-12`}>
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
                        <TouchableOpacity
                            style={{ alignItems: 'flex-end' }}
                            onPress={() => navigate('ForgotPassword')}
                        >
                            <Text style={tw`mb-4 text-lightYellow`}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>
                    <Pressable
                        onPress={methods.handleSubmit(onSubmit, onError)}
                        style={tw`bg-main p-2 rounded-md`}
                    >
                        <Text style={tw`text-center text-lg tracking-wide`}>
                            LOG IN
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
