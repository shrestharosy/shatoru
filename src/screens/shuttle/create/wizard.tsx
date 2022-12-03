import React, { useState } from 'react';
import {
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    UseFormReturn,
} from 'react-hook-form';
import { useStep } from 'react-hooks-helper';
import { View, Text, Pressable } from 'react-native';
import tw from 'src/styles/tailwind';
import PrimaryDetails from './details/primary';
import ScheduleDetails from './details/schedule';

enum StepsEnum {
    primary = 'primary',
    schedule = 'schedule',
    submit = 'submit',
}

const steps = [
    { id: StepsEnum.primary },
    { id: StepsEnum.schedule },
    { id: StepsEnum.submit },
];

interface IShuttleFormValues {
    shuttleName: string;
    shuttleSchedule: string;
}

const MultiStepForm = () => {
    const { ...methods }: UseFormReturn<IShuttleFormValues> =
        useForm<IShuttleFormValues>({
            defaultValues: { shuttleName: 'Blue Shuttle' },
        });

    const {
        step: { id },
        navigation,
    } = useStep({ initialStep: 0, steps });

    const props = { navigation, methods };

    const { next, previous } = navigation;

    const getForm = () => {
        switch (id) {
            case StepsEnum.primary:
                return <PrimaryDetails {...props} />;
            case StepsEnum.schedule:
                return <ScheduleDetails {...props} />;
            case StepsEnum.submit:
                return <Submit {...props} />;
            default:
                return <Submit {...props} />;
        }
    };

    return (
        <>
            <View style={tw`py-5 px-2`}>
                <FormProvider {...methods}>{getForm()}</FormProvider>
            </View>
            <View>
                <Pressable
                    style={tw`bg-main p-2 rounded-md`}
                    onPress={previous}
                >
                    <Text style={tw`text-center text-lg tracking-wide`}>
                        Previous
                    </Text>
                </Pressable>
                {id !== StepsEnum.submit && (
                    <Pressable
                        style={tw`bg-main p-2 rounded-md`}
                        onPress={next}
                    >
                        <Text style={tw`text-center text-lg tracking-wide`}>
                            Next
                        </Text>
                    </Pressable>
                )}
            </View>
        </>
    );
};

const Submit = ({ methods }) => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<IShuttleFormValues> = async (data) => {
        setIsLoading(true);
        try {
            console.log(data);
        } catch (error) {
            console.log('error');
        } finally {
            setIsLoading(false);
        }
    };

    const onError: SubmitErrorHandler<IShuttleFormValues> = (errors) => {
        return console.log({ errors });
    };

    return (
        <View>
            <Text>Thank you for submitting</Text>
            <Text>New Form {'->'}</Text>
            <Pressable
                onPress={methods.handleSubmit(onSubmit, onError)}
                style={tw`bg-main p-2 rounded-md`}
                disabled={isLoading}
            >
                <Text style={tw`text-center text-lg tracking-wide`}>
                    {isLoading ? 'Loading...' : 'Submit '}
                </Text>
            </Pressable>
        </View>
    );
};

export default MultiStepForm;
