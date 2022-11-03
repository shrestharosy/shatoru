import { useContext, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <Text style={tailwind('text-red-500')}>Hello</Text>
            <>
                <FormProvider {...methods}>
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
                    <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: color.blue }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </FormProvider>
            </>
            <View style={styles.button}>
                <Button
                    title="Log In"
                    color="#FFF"
                    onPress={methods.handleSubmit(onSubmit, onError)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        height: 50,
        backgroundColor: color.blue,
        borderRadius: 8,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
});
