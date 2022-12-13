import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import {
    Controller,
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { Pressable, ScrollView, Text } from 'react-native';
import CustomMultiSelect, {
    DropDownStyleEnum,
} from 'src/components/form/CustomMultiSelect';
import { CustomInput } from 'src/components/form/CustomTextInput';
import { Label } from 'src/components/form/Label';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import createDriverSchema from 'src/libs/validation-schema/create_driver_schema';
import { driverService } from 'src/services/driver';
import { shuttleService } from 'src/services/shuttle';
import { IOption } from 'src/services/shuttle/shuttle.type';

import tw from 'src/styles/tailwind';

interface IDriver extends IRouteProps {}

interface ICreateDriverFormValues {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    schedule: string;
}

const CreateDriver = ({ navigation }: IDriver) => {
    const [shuttlesOption, setShuttlesOption] = useState<Array<IOption>>([]);
    const [selectedOptions, setSelectedOptions] = React.useState<Array<string>>(
        []
    );

    const { ...methods } = useForm<ICreateDriverFormValues>({
        resolver: yupResolver(createDriverSchema),
    });

    const onSubmit: SubmitHandler<ICreateDriverFormValues> = async (data) => {
        try {
            await driverService.createDriver(data);
            alert('Driver created successfully');
            navigation.navigate('Driver');
        } catch (error: any) {
            alert(error.message ?? 'Please try again');
        }
    };

    const onError: SubmitErrorHandler<ICreateDriverFormValues> = (errors) => {
        return console.log({ errors });
    };

    useEffect(() => {
        getAllSchedules();
    }, []);

    const getAllSchedules = async () => {
        try {
            const response = await shuttleService.fetchSchedules();
            const shuttleOptions = response.map((shuttle) => ({
                label: shuttle.shuttle,
                value: shuttle.id,
            }));
            setShuttlesOption(shuttleOptions);
        } catch (error) {
            alert('Error while fetching schedules');
        }
    };

    return (
        <ScrollView
            style={tw`pt-4 px-4`}
            automaticallyAdjustKeyboardInsets={true}
        >
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
                    <Controller
                        name="schedule"
                        control={methods.control}
                        render={({}) => (
                            <>
                                <Label label={'Shuttle'} />
                                <CustomMultiSelect
                                    name="schedule"
                                    options={shuttlesOption}
                                    isSearchAllowed={false}
                                    showSelectedOptionsAsTags={true}
                                    selectedOptions={selectedOptions}
                                    dropDownStyle={
                                        DropDownStyleEnum.dropdownAlt
                                    }
                                    onChange={(item) => {
                                        setSelectedOptions(item);
                                        methods.setValue('schedule', item);
                                    }}
                                />
                            </>
                        )}
                    />
                </FormProvider>
            </>
            <Pressable
                style={tw`bg-main mt-4 p-2 rounded-md`}
                onPress={methods.handleSubmit(onSubmit, onError)}
            >
                <Text style={tw`text-center text-white text-lg tracking-wide`}>
                    Create
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default withProtectedScreen(CreateDriver);
