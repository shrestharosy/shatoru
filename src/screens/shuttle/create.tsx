import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';

import MultiStepForm from './create/wizard';

interface ICreateShuttleProps extends IRouteProps {}

const CreateShuttle = ({ navigation }: ICreateShuttleProps) => {
    return (
        <SafeAreaView>
            <MultiStepForm />
        </SafeAreaView>
    );
};

export default withProtectedScreen(CreateShuttle);
