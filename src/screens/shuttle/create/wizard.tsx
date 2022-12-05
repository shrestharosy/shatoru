import React, { useState } from 'react';
import {
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    UseFormReturn,
} from 'react-hook-form';
import { useStep } from 'react-hooks-helper';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Loader from 'src/components/loader';
import { shuttleService } from 'src/services/shuttle';
import { IStopJSON } from 'src/services/shuttle/shuttle.type';
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
    name: string;
    stops: Array<IStopDetails>;
    stopIds: Array<string>;
    startTime: Date;
    endTime: Date;
    days: Array<string>;
}

interface IStopDetails {
    name: string;
    interval: number;
}

export const defaultValues = {
    name: 'Blue Shuttle',
    stops: [],
    startTime: new Date(),
    endTime: new Date(),
};

const MultiStepForm = () => {
    const { ...methods }: UseFormReturn<IShuttleFormValues> =
        useForm<IShuttleFormValues>({
            defaultValues,
        });

    const {
        step: { id },
        navigation,
    } = useStep({ initialStep: 0, steps });

    const { next, previous } = navigation;

    const getForm = () => {
        switch (id) {
            case StepsEnum.primary:
                return <PrimaryDetails />;
            case StepsEnum.schedule:
                return <ScheduleDetails />;
            default:
                return null;
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<IShuttleFormValues> = async (data) => {
        setIsLoading(true);
        try {
            const {
                name: shuttle,
                startTime: start_time,
                endTime: end_time,
                days,
                stops,
            } = data;
            let formattedStops: IStopJSON = {};
            stops.forEach((stop) => {
                formattedStops = {
                    ...formattedStops,
                    [stop.name]: stop.interval,
                };
            });
            await shuttleService.createShuttle({
                shuttle,
                start_time,
                end_time,
                days,
                stops: formattedStops,
            });
            alert('Shuttle created successfully');
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
        <ScrollView>
            <View style={tw`py-5 px-2`}>
                <FormProvider {...methods}>{getForm()}</FormProvider>
            </View>
            <View style={tw`flex flex-row justify-between p-2`}>
                <Pressable
                    style={tw`bg-main p-2 rounded-md w-24`}
                    onPress={previous}
                    disabled={id === StepsEnum.primary}
                >
                    <Text style={tw`text-center text-base tracking-wide`}>
                        Previous
                    </Text>
                </Pressable>

                {id !== StepsEnum.submit && (
                    <Pressable
                        style={tw`bg-main p-2 rounded-md w-24`}
                        onPress={next}
                    >
                        <Text style={tw`text-center text-base tracking-wide`}>
                            Next
                        </Text>
                    </Pressable>
                )}
                {id === StepsEnum.submit && (
                    <Pressable
                        style={tw`bg-main p-2 rounded-md w-24`}
                        onPress={methods.handleSubmit(onSubmit, onError)}
                    >
                        <Text style={tw`text-center text-base tracking-wide`}>
                            {isLoading ? <Loader /> : 'Submit '}
                        </Text>
                    </Pressable>
                )}
            </View>
        </ScrollView>
    );
};

// const Submit = ({ methods }) => {
//     const [isLoading, setIsLoading] = useState(false);

//     const onSubmit: SubmitHandler<IShuttleFormValues> = async (data) => {
//         setIsLoading(true);
//         try {
//             console.log(data);
//             // console.log(data.stops.map((stop) => stop));
//         } catch (error) {
//             console.log('error');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const onError: SubmitErrorHandler<IShuttleFormValues> = (errors) => {
//         return console.log({ errors });
//     };

//     return (
//         <View>
//             <Text>Thank you for submitting</Text>
//             <Text>New Form {'->'}</Text>
//             <Pressable
//                 onPress={methods.handleSubmit(onSubmit, onError)}
//                 style={tw`bg-main p-2 rounded-md`}
//                 disabled={isLoading}
//             >
//                 <Text style={tw`text-center text-lg tracking-wide`}>
//                     {isLoading ? 'Loading...' : 'Submit '}
//                 </Text>
//             </Pressable>
//         </View>
//     );
// };

export default MultiStepForm;
