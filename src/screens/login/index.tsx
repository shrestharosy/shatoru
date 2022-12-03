import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
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
import { IMAGE } from 'src/images';
import Loader from 'src/components/loader';

interface ILoginFormValues {
    username: string;
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

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<ILoginFormValues> = async (data) => {
        setIsLoading(true);
        try {
            await login(data);
        } catch (error) {
            console.log('error');
        } finally {
            setIsLoading(false);
        }
    };

    const onError: SubmitErrorHandler<ILoginFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View style={tw`py-12 px-2`}>
            <View style={tw`px-8 bg-lightGray rounded-xl w-full`}>
                <Image source={IMAGE.SHUTTLE} style={tw`h-32 w-full`} />
                <Text
                    style={tw`text-brownRed text-base text-center mt-2 font-bold`}
                >
                    UMD Shuttle Service
                </Text>
            </View>
            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-2xl`}>Welcome!</Text>
                <Text>Log in to your account</Text>
                <View style={tw`mt-8`}>
                    <FormProvider {...methods}>
                        <Controller
                            name="username"
                            control={methods.control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    label="Username"
                                    placeholder="shatoru"
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
                            <Text style={tw`mb-3 text-lightYellow`}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </FormProvider>
                    <Pressable
                        onPress={methods.handleSubmit(onSubmit, onError)}
                        style={tw`bg-main p-2 rounded-md`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <Text style={tw`text-center text-lg tracking-wide`}>
                                LOG IN
                            </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
