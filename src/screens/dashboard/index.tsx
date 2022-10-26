import { useContext } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { color } from '../../styles/color';

const Dashboard = () => {
    const { logout, isLoggedIn } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</Text>

            {isLoggedIn && (
                <TouchableOpacity
                    style={{
                        backgroundColor: color.maize,
                    }}
                    onPress={() => logout()}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
