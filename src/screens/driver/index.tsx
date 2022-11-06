import React from 'react';
import {
    Button,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import withProtectedScreen from 'src/libs/hoc/auth_wrapper';
import { IRouteProps } from 'src/libs/routes';
import { color } from 'src/styles/color';

interface IDriver extends IRouteProps {}

const Driver = ({ navigation }: IDriver) => {
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Create Driver"
                    onPress={() => navigation.navigate('CreateDriver')}
                />
            </View>
            <View>
                <Text>No driver found</Text>
            </View>
        </SafeAreaView>
    );
};

export default withProtectedScreen(Driver);

const styles = StyleSheet.create({});
