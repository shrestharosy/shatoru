import { Text, View } from 'react-native';
import OTPInput from 'react-otp-input';
import { IRouteProps } from 'src/libs/routes';
import tw from 'src/styles/tailwind';

interface IOTP extends IRouteProps {}

export default function OTP() {
    return (
        <View style={tw`py-12 px-2`}>
            <View style={tw`pt-2`}>
                <Text>OTP</Text>
                <OTPInput
                    tintColor="#FB6C6A"
                    offTintColor="#BBBCBE"
                    otpLength={6}
                />
            </View>
        </View>
    );
}
